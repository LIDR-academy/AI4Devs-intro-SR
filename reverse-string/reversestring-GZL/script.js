
// Clase para manejar las operaciones de cadenas
class StringReverser {
    static reverse(str) {
        return str.split('').reverse().join('');
    }
}

// Clase para manejar las operaciones del portapapeles
class ClipboardManager {
    static async copy(text) {
        try {
            await navigator.clipboard.writeText(text);
            return true;
        } catch (err) {
            // Fallback para navegadores que no soportan clipboard API
            const textArea = document.createElement('textarea');
            textArea.value = text;
            document.body.appendChild(textArea);
            textArea.focus();
            textArea.select();
            const success = document.execCommand('copy');
            document.body.removeChild(textArea);
            return success;
        }
    }
}

// Clase para manejar las notificaciones
class NotificationManager {
    static show(message, type = 'success') {
        const notification = document.createElement('div');
        notification.className = 'success-message';
        notification.textContent = message;
        document.body.appendChild(notification);

        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 3000);
    }
}

// Clase para manejar el historial
class HistoryManager {
    constructor() {
        this.history = [];
    }

    add(original, reversed) {
        if (original.trim() === '') return;

        // Evitar duplicados
        const exists = this.history.some(item =>
            item.original === original && item.reversed === reversed
        );

        if (!exists) {
            this.history.unshift({ original, reversed, timestamp: Date.now() });
        }
    }

    getAll() {
        return this.history;
    }

    clear() {
        this.history = [];
    }
}

// Clase para manejar la interfaz del historial
class HistoryUI {
    constructor(historyManager, inputElement, outputElement) {
        this.historyManager = historyManager;
        this.inputElement = inputElement;
        this.outputElement = outputElement;
        this.historyListElement = document.getElementById('history-list');
        this.emptyHistoryElement = document.getElementById('empty-history');
        this.historyTemplate = document.getElementById('history-item-template');
    }

    render() {
        const history = this.historyManager.getAll();

        if (history.length === 0) {
            this.emptyHistoryElement.style.display = 'block';
            this.clearHistoryItems();
            return;
        }

        this.emptyHistoryElement.style.display = 'none';
        this.renderHistoryItems(history);
    }

    clearHistoryItems() {
        const historyItems = this.historyListElement.querySelectorAll('.history-item');
        historyItems.forEach(item => item.remove());
    }

    renderHistoryItems(history) {
        this.clearHistoryItems();

        history.forEach(item => {
            const historyItem = this.createHistoryItem(item);
            this.historyListElement.appendChild(historyItem);
        });
    }

    createHistoryItem(item) {
        const template = this.historyTemplate.content.cloneNode(true);
        const historyItem = template.querySelector('.history-item');
        const originalDiv = template.querySelector('.history-original');
        const reversedDiv = template.querySelector('.history-reversed');
        const loadBtn = template.querySelector('.load-btn');

        originalDiv.textContent = `Original: ${item.original}`;
        reversedDiv.textContent = `Invertido: ${item.reversed}`;

        loadBtn.addEventListener('click', () => {
            this.inputElement.value = item.original;
            this.outputElement.value = item.reversed;
            this.inputElement.focus();
            NotificationManager.show('¡Texto cargado en el campo de entrada!');
        });

        return historyItem;
    }
}

// Clase principal de la aplicación
class ReverseStringApp {
    constructor() {
        this.historyManager = new HistoryManager();
        this.initializeElements();
        this.historyUI = new HistoryUI(
            this.historyManager,
            this.inputElement,
            this.outputElement
        );
        this.setupEventListeners();
        this.currentReversedText = '';
    }

    initializeElements() {
        this.inputElement = document.getElementById('input-text');
        this.outputElement = document.getElementById('output-text');
        this.autoModeElement = document.getElementById('auto-mode');
        this.copyBtn = document.getElementById('copy-btn');
    }

    setupEventListeners() {
        // Evento de entrada de texto
        this.inputElement.addEventListener('input', () => {
            if (this.autoModeElement.checked) {
                this.reverseText();
            }
        });

        // Evento del botón copiar
        this.copyBtn.addEventListener('click', async () => {
            const inputText = this.inputElement.value.trim();

            if (inputText === '') {
                NotificationManager.show('¡Ingresa un texto primero!');
                return;
            }

            // Asegurar que el texto esté invertido antes de copiar
            const reversedText = StringReverser.reverse(inputText);
            this.outputElement.value = reversedText;

            const success = await ClipboardManager.copy(reversedText);
            if (success) {
                NotificationManager.show('¡Copiado al portapapeles!');
                this.historyManager.add(inputText, reversedText);
                this.historyUI.render();
            }
            
            this.inputElement.value = '';
            this.outputElement.value = '';
        });

        // Evento del checkbox de modo automático
        this.autoModeElement.addEventListener('change', () => {
            if (this.autoModeElement.checked) {
                this.reverseText();
            }
        });

        // Permitir hacer clic en el campo de salida para copiarlo
        this.outputElement.addEventListener('click', async () => {
            if (this.outputElement.value.trim() !== '') {
                const success = await ClipboardManager.copy(this.outputElement.value);
                if (success) {
                    NotificationManager.show('¡Copiado al portapapeles!');
                }
            }
        });
    }

    reverseText() {
        const inputText = this.inputElement.value;
        const reversedText = StringReverser.reverse(inputText);
        this.outputElement.value = reversedText;
        this.currentReversedText = reversedText;
    }
}

// Inicializar la aplicación cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    new ReverseStringApp();
});
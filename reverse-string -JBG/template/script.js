class ReverseStringApp {
    constructor() {
        this.history = [];
        this.selectedHistoryItem = null;
        this.initializeElements();
        this.bindEvents();
    }

    initializeElements() {
        this.textInput = document.getElementById('textInput');
        this.reverseBtn = document.getElementById('reverseBtn');
        this.autoMode = document.getElementById('autoMode');
        this.result = document.getElementById('result');
        this.historyList = document.getElementById('historyList');
        this.notification = document.getElementById('notification');
        this.globalButtons = document.getElementById('globalButtons');
        this.globalCopyBtn = document.getElementById('globalCopyBtn');
        this.globalReloadBtn = document.getElementById('globalReloadBtn');
    }

    bindEvents() {
        // Evento del botón invertir
        this.reverseBtn.addEventListener('click', () => {
            this.reverseText();
        });

        // Evento Enter en el input
        this.textInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.reverseText();
            }
        });

        // Modo automático
        this.textInput.addEventListener('input', () => {
            if (this.autoMode.checked) {
                this.reverseTextAuto();
            }
        });

        // Toggle modo automático
        this.autoMode.addEventListener('change', () => {
            if (this.autoMode.checked && this.textInput.value.trim()) {
                this.reverseTextAuto();
            }
        });

        // Botones globales
        this.globalCopyBtn.addEventListener('click', () => {
            if (this.selectedHistoryItem) {
                this.copyToClipboard(this.selectedHistoryItem);
            } else {
                this.showNotification('Selecciona un elemento del historial primero', 'error');
            }
        });

        this.globalReloadBtn.addEventListener('click', () => {
            if (this.selectedHistoryItem) {
                this.reloadToInput(this.selectedHistoryItem);
            } else {
                this.showNotification('Selecciona un elemento del historial primero', 'error');
            }
        });
    }

    reverseString(str) {
        return str.split('').reverse().join('');
    }

    reverseText() {
        const inputText = this.textInput.value.trim();
        
        if (!inputText) {
            this.showNotification('Por favor, ingresa un texto para invertir', 'error');
            return;
        }

        const reversedText = this.reverseString(inputText);
        this.result.textContent = reversedText;
        
        // Agregar al historial solo si NO está en modo automático
        if (!this.autoMode.checked) {
            this.addToHistory(reversedText);
        }
    }

    reverseTextAuto() {
        const inputText = this.textInput.value.trim();
        
        if (inputText) {
            const reversedText = this.reverseString(inputText);
            this.result.textContent = reversedText;
        } else {
            this.result.textContent = 'El texto invertido aparecerá aquí...';
        }
    }

    addToHistory(text) {
        // Evitar duplicados en el array
        if (this.history.includes(text)) {
            return;
        }

        this.history.push(text);
        this.addSingleHistoryItem(text, this.history.length - 1);
    }

    addToHistoryFromCopy(text) {
        // Esta función se llama cuando se hace clic en copiar en modo automático
        if (!this.history.includes(text)) {
            this.history.push(text);
            this.addSingleHistoryItem(text, this.history.length - 1);
        }
    }

    addSingleHistoryItem(item, index) {
        // Si es el primer elemento, limpiar el mensaje de "no hay elementos"
        if (this.history.length === 1) {
            this.historyList.innerHTML = '';
            this.globalButtons.style.display = 'flex';
        }

        const historyItem = document.createElement('div');
        historyItem.className = 'history-item';
        
        const textDiv = document.createElement('div');
        textDiv.className = 'history-text';
        textDiv.textContent = item;
        
        historyItem.appendChild(textDiv);
        
        // Evento de selección
        historyItem.addEventListener('click', () => {
            this.selectHistoryItem(item, historyItem);
        });
        
        // Insertar al principio para mostrar los más recientes primero
        this.historyList.insertBefore(historyItem, this.historyList.firstChild);
    }

    selectHistoryItem(text, element) {
        // Remover selección anterior
        const previousSelected = this.historyList.querySelector('.selected');
        if (previousSelected) {
            previousSelected.classList.remove('selected');
        }
        
        // Seleccionar nuevo elemento
        element.classList.add('selected');
        this.selectedHistoryItem = text;
    }

    // Función eliminada - ya no se usa updateHistoryDisplay

    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    async copyToClipboard(text) {
        try {
            await navigator.clipboard.writeText(text);
            this.showNotification('¡Texto copiado al portapapeles!');
            
            // Si estamos en modo automático y el texto no está en el historial, agregarlo
            if (this.autoMode.checked && this.result.textContent === text) {
                this.addToHistoryFromCopy(text);
            }
        } catch (err) {
            // Fallback para navegadores que no soportan clipboard API
            const textArea = document.createElement('textarea');
            textArea.value = text;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
            this.showNotification('¡Texto copiado al portapapeles!');
            
            // Si estamos en modo automático y el texto no está en el historial, agregarlo
            if (this.autoMode.checked && this.result.textContent === text) {
                this.addToHistoryFromCopy(text);
            }
        }
    }

    reloadToInput(text) {
        // Cargar el texto invertido tal como está en el historial (no revertirlo)
        this.textInput.value = text;
        this.textInput.focus();
        
        // Si el modo automático está activado, invertir automáticamente
        if (this.autoMode.checked) {
            this.reverseTextAuto();
        }
        
        this.showNotification('Texto cargado en el campo de entrada');
    }

    showNotification(message, type = 'success') {
        this.notification.textContent = message;
        this.notification.className = `notification ${type}`;
        this.notification.classList.add('show');

        setTimeout(() => {
            this.notification.classList.remove('show');
        }, 3000);
    }
}

// Inicializar la aplicación
const app = new ReverseStringApp();
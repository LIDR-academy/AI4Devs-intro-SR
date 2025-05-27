// Variables globales
let history = [];
let isAutoMode = true;

// Referencias a elementos del DOM
let textInput, reverseBtn, autoModeCheckbox, resultText, historyContainer, copyResultBtn;

// Función para inicializar referencias DOM
function initializeElements() {
    textInput = document.getElementById('textInput');
    reverseBtn = document.getElementById('reverseBtn');
    autoModeCheckbox = document.getElementById('autoMode');
    resultText = document.getElementById('resultText');
    historyContainer = document.getElementById('historyContainer');
    copyResultBtn = document.getElementById('copyResultBtn');
}

// Función para invertir texto
function reverseString(str) {
    return str.split('').reverse().join('');
}

// Función para actualizar el resultado
function updateResult() {
    const inputText = textInput.value;
    if (inputText.trim()) {
        const reversed = reverseString(inputText);
        resultText.textContent = reversed;
        resultText.style.color = '#333';
    } else {
        resultText.textContent = 'El texto invertido aparecerá aquí...';
        resultText.style.color = '#999';
    }
}

// Función para agregar al historial
function addToHistory(original, reversed) {
    // Evitar duplicados
    const exists = history.some(item => item.original === original);
    if (!exists) {
        history.unshift({ original, reversed, id: Date.now() });
        renderHistory();
    }
}

// Función para copiar al portapapeles
async function copyToClipboard(text) {
    try {
        await navigator.clipboard.writeText(text);
        
        // Mostrar feedback visual
        const originalText = resultText.textContent;
        resultText.textContent = '✅ ¡Copiado!';
        resultText.style.color = '#28a745';
        
        setTimeout(() => {
            resultText.textContent = originalText;
            resultText.style.color = '#333';
        }, 1000);
        
        return true;
    } catch (err) {
        console.error('Error al copiar:', err);
        alert('No se pudo copiar al portapapeles');
        return false;
    }
}

// Función para renderizar el historial
function renderHistory() {
    if (history.length === 0) {
        historyContainer.innerHTML = '<div class="empty-history">No hay elementos en el historial aún</div>';
        return;
    }

    const historyHTML = history.map(item => `
        <div class="history-item">
            <div class="history-content">
                <div class="history-text">
                    <div class="original-text">${escapeHtml(item.original)}</div>
                    <div class="reversed-text">→ ${escapeHtml(item.reversed)}</div>
                </div>
                <div class="history-actions">
                    <button class="btn btn-secondary btn-small" onclick="copyFromHistory('${escapeHtml(item.reversed)}')">
                        📋 Copiar
                    </button>
                    <button class="btn btn-secondary btn-small" onclick="loadToInput('${escapeHtml(item.original)}')">
                        ↩️ Cargar
                    </button>
                </div>
            </div>
        </div>
    `).join('');

    historyContainer.innerHTML = historyHTML;
}

// Función para escapar HTML
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Función para copiar desde el historial
async function copyFromHistory(text) {
    await copyToClipboard(text);
}

// Función para cargar texto al input
function loadToInput(text) {
    textInput.value = text;
    updateResult();
    textInput.focus();
}

// Función para copiar el resultado actual
async function copyCurrentResult() {
    const currentResult = resultText.textContent;
    if (currentResult && currentResult !== 'El texto invertido aparecerá aquí...') {
        const success = await copyToClipboard(currentResult);
        if (success && isAutoMode) {
            // En modo automático, agrega al historial cuando se copia
            const inputText = textInput.value.trim();
            if (inputText) {
                addToHistory(inputText, currentResult);
            }
        }
    }
}

// Función para manejar el evento de input
function handleTextInput() {
    if (isAutoMode) {
        updateResult();
    }
}

// Función para manejar el clic en el botón invertir
function handleReverseClick() {
    const inputText = textInput.value.trim();
    if (!inputText) {
        alert('Por favor, ingresa un texto para invertir');
        textInput.focus();
        return;
    }

    updateResult();
    const reversed = reverseString(inputText);
    
    // En modo automático, solo agrega al historial cuando se hace clic en "Copiar"
    if (!isAutoMode) {
        addToHistory(inputText, reversed);
    }
}

// Función para manejar el cambio de modo automático
function handleAutoModeChange(e) {
    isAutoMode = e.target.checked;
    if (!isAutoMode) {
        resultText.textContent = 'El texto invertido aparecerá aquí...';
        resultText.style.color = '#999';
    } else {
        updateResult();
    }
}

// Función para manejar tecla Enter
function handleKeyPress(e) {
    if (e.key === 'Enter') {
        if (!isAutoMode) {
            handleReverseClick();
        } else {
            copyCurrentResult();
        }
    }
}

// Función para inicializar event listeners
function initializeEventListeners() {
    textInput.addEventListener('input', handleTextInput);
    reverseBtn.addEventListener('click', handleReverseClick);
    autoModeCheckbox.addEventListener('change', handleAutoModeChange);
    copyResultBtn.addEventListener('click', copyCurrentResult);
    textInput.addEventListener('keypress', handleKeyPress);
}

// Función de inicialización principal
function initialize() {
    initializeElements();
    initializeEventListeners();
    updateResult();
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', initialize);
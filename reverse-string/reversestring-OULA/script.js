// Elementos del DOM
const input = document.getElementById('input');
const preview = document.getElementById('preview');
const autoMode = document.getElementById('autoMode');
const copyButton = document.getElementById('copyButton');
const historyContainer = document.getElementById('history');

// Array para almacenar el historial
let history = [];

// Función para revertir una cadena
function reverseString(str) {
    return str.split('').reverse().join('');
}

// Función para actualizar el preview
function updatePreview() {
    if (autoMode.checked && input.value) {
        const reversed = reverseString(input.value);
        preview.textContent = reversed;
    } else {
        preview.textContent = '';
    }
}

// Función para agregar un elemento al historial
function addToHistory(original, reversed) {
    history.push({ original, reversed });
    renderHistory();
}

// Función para renderizar el historial
function renderHistory() {
    historyContainer.innerHTML = '';
    history.forEach((item, index) => {
        const historyItem = document.createElement('div');
        historyItem.className = 'history-item';

        const textSpan = document.createElement('span');
        textSpan.className = 'history-text';
        textSpan.textContent = `${item.original} → ${item.reversed}`;

        const reloadButton = document.createElement('button');
        reloadButton.textContent = 'Recargar';
        reloadButton.onclick = () => {
            input.value = item.original;
            updatePreview();
        };

        const copyItemButton = document.createElement('button');
        copyItemButton.textContent = 'Copiar';
        copyItemButton.onclick = () => {
            navigator.clipboard.writeText(item.reversed);
        };

        historyItem.appendChild(textSpan);
        historyItem.appendChild(reloadButton);
        historyItem.appendChild(copyItemButton);
        historyContainer.appendChild(historyItem);
    });
}

// Event listeners
input.addEventListener('input', updatePreview);
autoMode.addEventListener('change', updatePreview);

copyButton.addEventListener('click', () => {
    if (input.value) {
        const reversed = reverseString(input.value);
        navigator.clipboard.writeText(reversed);
        addToHistory(input.value, reversed);
        input.value = '';
        preview.textContent = '';
    }
});


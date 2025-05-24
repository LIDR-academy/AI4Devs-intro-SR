let history = [];
let autoMode = false;

function reverseString() {
    const inputText = document.getElementById('inputText').value;
    const reversedText = inputText.split('').reverse().join('');
    addToHistory(inputText, reversedText);
}

function addToHistory(original, reversed) {
    history.push({ original, reversed });
    updateHistoryList();
}

function updateHistoryList() {
    const historyList = document.getElementById('historyList');
    historyList.innerHTML = '';
    history.forEach((entry, index) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            Original: ${entry.original} - Reversed: ${entry.reversed}
            <button onclick="copyToClipboard('${entry.reversed}')">Copiar</button>
            <button onclick="reloadText('${entry.original}')">Reload</button>
        `;
        historyList.appendChild(listItem);
    });
}

function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        alert('Texto copiado al portapapeles');
    });
}

function reloadText(original) {
    document.getElementById('inputText').value = original;
    autoReverse();
}

function toggleAutoMode() {
    autoMode = document.getElementById('autoMode').checked;
    autoReverse();
}

function autoReverse() {
    if (autoMode) {
        const inputText = document.getElementById('inputText').value;
        const reversedText = inputText.split('').reverse().join('');
        document.getElementById('previewText').innerText = `Previsualización: ${reversedText}`;
    } else {
        document.getElementById('previewText').innerText = '';
    }
}

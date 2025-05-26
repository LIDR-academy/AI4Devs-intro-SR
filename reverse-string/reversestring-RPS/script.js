const inputText = document.getElementById('inputText');
const reverseBtn = document.getElementById('reverseBtn');
const historyList = document.getElementById('historyList');
const autoMode = document.getElementById('autoMode');
const preview = document.getElementById('preview');

let history = [];

function reverseString(str) {
    return str.split('').reverse().join('');
}

function updatePreview() {
    if (autoMode.checked && inputText.value.trim()) {
        const reversed = reverseString(inputText.value);
        preview.textContent = `Previsualización: ${reversed}`;
    } else {
        preview.textContent = '';
    }
}

function updateHistory() {
    historyList.innerHTML = '';
    history.forEach(({ original, reversed }) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <strong>Original:</strong> ${original} <br>
            <strong>Invertido:</strong> ${reversed} <br>
            <button onclick="copyToClipboard('${original}')">Copiar original</button>
            <button onclick="copyToClipboard('${reversed}')">Copiar invertido</button>
            <button onclick="loadToInput('${original}')">Recargar</button>
        `;
        historyList.appendChild(li);
    });
}

function copyToClipboard(text) {
    navigator.clipboard.writeText(text)
        .then(() => alert('Texto copiado al portapapeles'))
        .catch(err => console.error('Error al copiar: ', err));
}

function loadToInput(text) {
    inputText.value = text;
    updatePreview(); // Actualiza la previsualización si está activada
}

reverseBtn.addEventListener('click', () => {
    let original = inputText.value;
    if (!original.trim()) return;

    let reversed = reverseString(original);
    history.push({ original, reversed });
    updateHistory();

    // 🔄 Limpia el input y la previsualización
    inputText.value = '';
    preview.textContent = '';
});

inputText.addEventListener('input', updatePreview);
autoMode.addEventListener('change', updatePreview);

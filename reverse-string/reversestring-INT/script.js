const textInput = document.getElementById('textInput');
const autoMode = document.getElementById('autoMode');
const invertBtn = document.getElementById('invertBtn');
const resultSection = document.getElementById('resultSection');
const resultText = document.getElementById('resultText');
const copyResultBtn = document.getElementById('copyResultBtn');
const historySection = document.getElementById('historySection');
const historyList = document.getElementById('historyList');

let currentInverted = '';
let history = [];

// Utility: invert string
function invertString(str) {
    return str.split('').reverse().join('');
}

// Update result display
function updateResultDisplay(text) {
    currentInverted = text;
    resultText.textContent = text;

    if (text) {
        resultSection.style.display = 'block';
        copyResultBtn.style.display = 'inline-block';
    } else {
        resultSection.style.display = 'none';
        copyResultBtn.style.display = 'none';
    }
}

// Update history display
function updateHistoryDisplay() {
    if (history.length === 0) {
        historySection.style.display = 'none';
        return;
    }

    historySection.style.display = 'block';
    historyList.innerHTML = '';

    history.forEach((item, index) => {
        const li = document.createElement('li');
        li.className = 'history-item';

        const span = document.createElement('span');
        span.className = 'history-text';
        span.textContent = item;

        const btnGroup = document.createElement('div');
        btnGroup.className = 'history-buttons';

        const copyBtn = document.createElement('button');
        copyBtn.textContent = 'Copiar';
        copyBtn.setAttribute('aria-label', `Copiar entrada ${index + 1}`);
        copyBtn.addEventListener('click', () => {
            navigator.clipboard.writeText(item).then(() => {
                showCopyConfirmation(copyBtn);
            });
        });

        const reloadBtn = document.createElement('button');
        reloadBtn.textContent = 'Recargar';
        reloadBtn.setAttribute('aria-label', `Recargar entrada ${index + 1}`);
        reloadBtn.addEventListener('click', () => {
            textInput.value = item;
            handleInput();
        });

        btnGroup.appendChild(copyBtn);
        btnGroup.appendChild(reloadBtn);

        li.appendChild(span);
        li.appendChild(btnGroup);
        historyList.appendChild(li);
    });
}

// Show confirmation message next to button
function showCopyConfirmation(button) {
    let confirmSpan = document.createElement('span');
    confirmSpan.textContent = '¡Copiado!';
    confirmSpan.className = 'copy-confirm';

    button.parentNode.appendChild(confirmSpan);

    setTimeout(() => {
        confirmSpan.remove();
    }, 1500);
}

// Handle input changes
function handleInput() {
    if (autoMode.checked) {
        const inverted = invertString(textInput.value);
        updateResultDisplay(inverted);
    }
}

// Handle manual invert
function handleManualInvert() {
    const inverted = invertString(textInput.value);
    updateResultDisplay(inverted);
}

// Handle copy and save to history
function handleCopyResult() {
    if (currentInverted) {
        navigator.clipboard.writeText(currentInverted);

        // Only add if not already in history
        if (!history.includes(currentInverted)) {
            history.unshift(currentInverted);
            updateHistoryDisplay();
        }

        // Clear input and result
        textInput.value = '';
        updateResultDisplay('');
    }
}

// Event listeners
textInput.addEventListener('input', handleInput);
autoMode.addEventListener('change', () => {
    invertBtn.style.display = autoMode.checked ? 'none' : 'inline-block';
    handleInput();
});

invertBtn.addEventListener('click', handleManualInvert);
copyResultBtn.addEventListener('click', handleCopyResult);

// Initialize
invertBtn.style.display = autoMode.checked ? 'none' : 'inline-block';
copyResultBtn.style.display = 'none';
resultSection.style.display = 'none';
historySection.style.display = 'none';

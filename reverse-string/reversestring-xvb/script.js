// script.js

const inputText = document.getElementById('inputText');
const autoMode = document.getElementById('autoMode');
const historyList = document.getElementById('historyList');

const state = {
    lastManualInput: '',
    history: []
};

function reverseString(str) {
    return str.split('').reverse().join('');
}

function updateInput(value) {
    inputText.value = value;
}

function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        alert('Copied to clipboard');
    });
}

function addToHistory(original, reversed) {
    const item = document.createElement('li');
    item.className = 'history-item';

    const text = document.createElement('span');
    text.textContent = reversed;

    const copyButton = document.createElement('button');
    copyButton.textContent = 'Copy';
    copyButton.onclick = () => {
        copyToClipboard(reversed);
        if (autoMode.checked && !state.history.includes(reversed)) {
            state.history.push(reversed);
            addToHistory(original, reversed);
        }
    };

    const reloadButton = document.createElement('button');
    reloadButton.textContent = 'Reload';
    reloadButton.onclick = () => {
        updateInput(original);
    };

    item.appendChild(text);
    item.appendChild(copyButton);
    item.appendChild(reloadButton);
    historyList.appendChild(item);
}

inputText.addEventListener('input', (e) => {
    if (autoMode.checked) {
        // Only reverse the most recent manual input, not the reversed result
        const current = e.target.value;
        const reversed = reverseString(current);

        // Prevent infinite loop by not updating if text is already reversed
        if (current !== reverseString(state.lastManualInput)) {
            state.lastManualInput = current;
            updateInput(reversed);
        }
    } else {
        state.lastManualInput = e.target.value;
    }
});

inputText.addEventListener('change', () => {
    const original = state.lastManualInput;
    const reversed = reverseString(original);
    if (!autoMode.checked) {
        updateInput(reversed);
        addToHistory(original, reversed);
    }
});

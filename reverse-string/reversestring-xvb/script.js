// script.js

const inputText = document.getElementById('inputText');
const autoMode = document.getElementById('autoMode');
const historyList = document.getElementById('historyList');
const reversedOutput = document.getElementById('reversedOutput');

const state = {
    history: []
};

function reverseString(str) {
    return str.split('').reverse().join('');
}

function updateOutput(original, reversed) {
    reversedOutput.textContent = `Original: ${original} | Reversed: ${reversed}`;
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
            renderHistoryItem(original, reversed);
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

function renderHistoryItem(original, reversed) {
    if (!state.history.includes(reversed)) {
        state.history.push(reversed);
        addToHistory(original, reversed);
    }
}

let lastProcessedInput = '';

inputText.addEventListener('input', () => {
    const current = inputText.value;
    if (autoMode.checked && current !== lastProcessedInput) {
        const reversed = reverseString(current);
        lastProcessedInput = reversed;
        updateOutput(current, reversed);
    }
});

inputText.addEventListener('change', () => {
    const original = reverseString(inputText.value);
    const reversed = inputText.value;
    if (!autoMode.checked) {
        updateOutput(original, reversed);
        renderHistoryItem(original, reversed);
    }
});

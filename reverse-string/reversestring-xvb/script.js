// script.js

const inputText = document.getElementById('inputText');
const autoMode = document.getElementById('autoMode');
const historyList = document.getElementById('historyList');

const state = {
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
        // Save to history on copy if auto mode
        if (autoMode.checked && !state.history.includes(reversed)) {
            state.history.push(reversed);
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

inputText.addEventListener('input', () => {
    if (autoMode.checked) {
        const reversed = reverseString(inputText.value);
        updateInput(reversed);
    }
});

inputText.addEventListener('change', () => {
    const original = inputText.value;
    const reversed = reverseString(original);
    if (!autoMode.checked) {
        updateInput(reversed);
        addToHistory(original, reversed);
    }
});

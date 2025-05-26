// DOM Elements
const inputText = document.getElementById('inputText');
const reverseBtn = document.getElementById('reverseBtn');
const copyBtn = document.getElementById('copyBtn');
const result = document.getElementById('result');
const historyList = document.getElementById('historyList');
const autoReverseCheckbox = document.getElementById('autoReverse');

// State management
let history = [];

// Function to reverse the string
function reverseString(str) {
    return str.split('').reverse().join('');
}

// Function to update result
function updateResult() {
    const text = inputText.value;
    const reversedText = reverseString(text);
    result.textContent = reversedText;
    
    // Show/hide copy button based on result
    copyBtn.style.display = reversedText.trim() !== '' ? 'inline-flex' : 'none';
}

// Function to add to history
function addToHistory(original, reversed) {
    // Add to beginning of array
    history.unshift({ original, reversed });
    updateHistoryDisplay();
}

// Function to update history display
function updateHistoryDisplay() {
    historyList.innerHTML = '';
    
    history.forEach((item, index) => {
        const historyItem = document.createElement('div');
        historyItem.className = 'history-item';
        
        const textSpan = document.createElement('span');
        textSpan.className = 'history-text';
        textSpan.textContent = `${item.original} ➔ ${item.reversed}`;
        
        const copyButton = document.createElement('button');
        copyButton.className = 'history-button history-copy';
        copyButton.innerHTML = 'Copy 📋';
        copyButton.onclick = () => copyToClipboard(item.reversed);
        
        const reloadButton = document.createElement('button');
        reloadButton.className = 'history-button history-reload';
        reloadButton.innerHTML = 'Reload 🔄';
        reloadButton.onclick = () => reloadFromHistory(item.original);
        
        historyItem.appendChild(textSpan);
        historyItem.appendChild(copyButton);
        historyItem.appendChild(reloadButton);
        
        historyList.appendChild(historyItem);
    });
}

// Function to copy text to clipboard
async function copyToClipboard(text) {
    try {
        await navigator.clipboard.writeText(text);
        
        // Add to history only when copying
        if (!history.some(item => item.reversed === text)) {
            addToHistory(inputText.value, text);
        }
        
        // Visual feedback
        const button = event.target;
        const originalText = button.innerHTML;
        button.innerHTML = 'Copied! ✓';
        setTimeout(() => {
            button.innerHTML = originalText;
        }, 2000);
    } catch (err) {
        console.error('Failed to copy text: ', err);
    }
}

// Function to reload from history
function reloadFromHistory(text) {
    inputText.value = text;
    if (autoReverseCheckbox.checked) {
        updateResult();
    }
}

// Event Listeners
reverseBtn.addEventListener('click', () => {
    updateResult();
});

copyBtn.addEventListener('click', () => {
    copyToClipboard(result.textContent);
});

inputText.addEventListener('input', () => {
    if (autoReverseCheckbox.checked) {
        updateResult();
    } else if (inputText.value.trim() === '') {
        result.textContent = '';
        copyBtn.style.display = 'none';
    }
});

autoReverseCheckbox.addEventListener('change', () => {
    if (autoReverseCheckbox.checked && inputText.value.trim() !== '') {
        updateResult();
    }
});
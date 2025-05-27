document.addEventListener('DOMContentLoaded', () => {
    const textInput = document.getElementById('text-input');
    const reverseButton = document.getElementById('reverse-button');
    const copyCurrentButton = document.getElementById('copy-current-button');
    const reversedTextOutput = document.getElementById('reversed-text-output');
    const autoModeCheckbox = document.getElementById('auto-mode-checkbox');
    const historyList = document.getElementById('history-list');
    const copyStatus = document.getElementById('copy-status');

    let history = []; // In-memory history
    let isAutoMode = autoModeCheckbox.checked;

    function reverseString(str) {
        return str.split('').reverse().join('');
    }

    function displayCopyStatus(message, success = true) {
        copyStatus.textContent = message;
        copyStatus.style.color = success ? '#28a745' : '#dc3545';
        setTimeout(() => {
            copyStatus.textContent = '';
        }, 2000);
    }
    
    function processInputAndDisplay() {
        const originalText = textInput.value;
        const reversed = reverseString(originalText);
        reversedTextOutput.textContent = reversed;
        return reversed; // Return the reversed string for potential use
    }

    function addToHistory(str) {
        if (str && (history.length === 0 || history[history.length - 1] !== str)) {
            // Add to the beginning of the array to show newest first in internal data
            history.unshift(str); 
            renderHistory();
        }
    }

    function renderHistory() {
        historyList.innerHTML = ''; // Clear current list

        // History array already has newest first due to unshift
        history.forEach(itemText => {
            const listItem = document.createElement('li');

            const textSpan = document.createElement('span');
            textSpan.className = 'history-text';
            textSpan.textContent = itemText;
            listItem.appendChild(textSpan);

            const buttonContainer = document.createElement('div'); // Container for buttons
            buttonContainer.className = 'history-item-buttons';

            const copyButton = document.createElement('button');
            copyButton.textContent = 'Copy';
            copyButton.addEventListener('click', () => {
                navigator.clipboard.writeText(itemText)
                    .then(() => displayCopyStatus(`Copied "${itemText}" to clipboard!`))
                    .catch(err => {
                        console.error('Failed to copy from history: ', err);
                        displayCopyStatus('Failed to copy.', false);
                    });
            });
            buttonContainer.appendChild(copyButton);

            const reloadButton = document.createElement('button');
            reloadButton.textContent = 'Reload';
            reloadButton.addEventListener('click', () => {
                textInput.value = itemText; // Reloads the (already reversed) string from history
                if (isAutoMode) {
                    processInputAndDisplay(); 
                } else {
                    reversedTextOutput.textContent = ''; 
                }
                textInput.focus();
            });
            buttonContainer.appendChild(reloadButton);
            listItem.appendChild(buttonContainer);

            historyList.appendChild(listItem);
        });
    }

    // Event Listeners
    autoModeCheckbox.addEventListener('change', () => {
        isAutoMode = autoModeCheckbox.checked;
        if (isAutoMode) {
            processInputAndDisplay(); 
        }
    });

    textInput.addEventListener('input', () => {
        if (isAutoMode) {
            processInputAndDisplay();
        }
    });

    reverseButton.addEventListener('click', () => {
        const reversed = processInputAndDisplay(); 
        if (!isAutoMode && reversed) {
            addToHistory(reversed);
        }
    });

    copyCurrentButton.addEventListener('click', () => {
        const textToCopy = reversedTextOutput.textContent;
        if (textToCopy) {
            navigator.clipboard.writeText(textToCopy)
                .then(() => {
                    displayCopyStatus(`Copied "${textToCopy}" to clipboard!`);
                    if (isAutoMode) { 
                        addToHistory(textToCopy);
                    }
                })
                .catch(err => {
                    console.error('Failed to copy current reversed text: ', err);
                    displayCopyStatus('Failed to copy.', false);
                });
        } else {
            displayCopyStatus('Nothing to copy.', false);
        }
    });

    // Initial state
    if (isAutoMode && textInput.value) {
        processInputAndDisplay();
    }
    renderHistory(); // Initial render for an empty history or if loaded from elsewhere
});
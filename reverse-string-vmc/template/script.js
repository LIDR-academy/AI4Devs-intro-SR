const inputText = document.getElementById('inputText');
const reverseBtn = document.getElementById('reverseBtn');
const cleanBtn = document.getElementById('cleanBtn');
const historyList = document.getElementById('historyList');
const autoMode = document.getElementById('autoMode');
const reversedOutput = document.getElementById('reversedOutput');

let history = [];

function reverseString(str) {
    return str.split('').reverse().join('');
}

function renderHistory() {
    historyList.innerHTML = '';
    history.forEach((entry) => {
        const li = document.createElement('li');
        li.textContent = entry.reversed;

        const copyBtn = document.createElement('button');
        copyBtn.textContent = '📋';
        copyBtn.style.marginLeft = '10px';
        copyBtn.onclick = () => {
            navigator.clipboard.writeText(entry.reversed);
            if (autoMode.checked && !history.some(h => h.reversed === entry.reversed)) {
                history.unshift(entry);
                renderHistory();
            }
        };

        const reloadBtn = document.createElement('button');
        reloadBtn.textContent = '⟳';
        reloadBtn.style.marginLeft = '8px';
        reloadBtn.onclick = () => {
            inputText.value = entry.original;
            reversedOutput.textContent = entry.reversed;
        };

        li.appendChild(copyBtn);
        li.appendChild(reloadBtn);
        historyList.appendChild(li);
    });
}

function handleAutoMode() {
    const original = inputText.value;
    const reversed = reverseString(original);
    reversedOutput.textContent = reversed;
}

reverseBtn.addEventListener('click', () => {
    const original = inputText.value;
    const reversed = reverseString(original);
    reversedOutput.textContent = reversed;
    history.unshift({ original, reversed });
    renderHistory();
});

cleanBtn.addEventListener('click', () => {
    inputText.value = '';
    reversedOutput.textContent = '';
});

inputText.addEventListener('input', () => {
    if (autoMode.checked) {
        handleAutoMode();
    }
});

const input = document.getElementById('textInput');
const reverseBtn = document.getElementById('reverseBtn');
const copyBtn = document.getElementById('copyBtn');
const autoMode = document.getElementById('autoMode');
const resultList = document.getElementById('resultList');

let currentReversed = '';

function reverseString(str) {
    return str.split('').reverse().join('');
}

function updateReversedString() {
    currentReversed = reverseString(input.value);
}

reverseBtn.addEventListener('click', () => {
    updateReversedString();
    const li = document.createElement('li');
    li.textContent = currentReversed;
    resultList.appendChild(li);
});

copyBtn.addEventListener('click', async () => {
    if (autoMode.checked) {
        updateReversedString();
    }
    try {
        await navigator.clipboard.writeText(currentReversed);
        if (autoMode.checked) {
            const li = document.createElement('li');
            li.textContent = currentReversed;
            resultList.appendChild(li);
        }
        alert('Copied to clipboard!');
    } catch (err) {
        alert('Failed to copy!');
    }
});

const handleAutoReverse = debounce(() => {
    if (autoMode.checked) {
        const original = input.value;
        const reversed = reverseString(original);
        input.value = reversed;
        currentReversed = reversed;

        // Move cursor to end
        input.setSelectionRange(reversed.length, reversed.length);
    }
}, 300);

input.addEventListener('input', handleAutoReverse);


autoMode.addEventListener('change', () => {
    if (!autoMode.checked) {
        input.value = ''; // Optional: clear input when turning off auto mode
        currentReversed = '';
    }
});


function debounce(func, delay) {
    let timeout;
    return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), delay);
    };
}

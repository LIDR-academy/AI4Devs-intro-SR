const textInput = document.getElementById('textInput');
const reverseButton = document.getElementById('reverseButton');
const historyList = document.getElementById('historyList');

const historyArray = [];

function reverseString(str) {
    return str.split('').reverse().join('');
}

function isAnyAutoModeOn() {
    return historyArray.some(entry => entry.auto);
}

function updateHistoryList() {
    historyList.innerHTML = '';

    historyArray.forEach((entry) => {
        const li = document.createElement('li');

        const span = document.createElement('span');
        span.textContent = entry.text + ' ';

        const autoCheckbox = document.createElement('input');
        autoCheckbox.type = 'checkbox';
        autoCheckbox.checked = entry.auto;
        autoCheckbox.addEventListener('change', () => {
            entry.auto = autoCheckbox.checked;
        });

        const autoLabel = document.createElement('label');
        autoLabel.textContent = 'Auto';

        const copyButton = document.createElement('button');
        copyButton.textContent = 'Copiar';
        copyButton.addEventListener('click', () => {
            if (entry.text.trim() === '') return;

            navigator.clipboard.writeText(entry.text)
                .then(() => {
                    if (isAnyAutoModeOn()) {
                        if (!historyArray.some(e => e.text === textInput.value) && textInput.value.trim() !== '') {
                            historyArray.push({ text: textInput.value, auto: true });
                            updateHistoryList();
                            textInput.value = '';
                            originalInput = '';
                        }
                    }
                })
                .catch(err => console.error('Error al copiar: ', err));
        });

        const reloadButton = document.createElement('button');
        reloadButton.textContent = 'Recargar';
        reloadButton.addEventListener('click', () => {
            textInput.value = entry.text;
            originalInput = entry.text;
        });

        li.appendChild(span);
        li.appendChild(autoCheckbox);
        li.appendChild(autoLabel);
        li.appendChild(copyButton);
        li.appendChild(reloadButton);

        historyList.appendChild(li);
    });
}

function debounce(func, wait) {
    let timeout;
    return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}

let isUpdating = false;
let originalInput = '';  // Texto sin invertir, siempre limpio y puro

const doAutoInvert = debounce(() => {
    if (!isAnyAutoModeOn() || isUpdating) return;

    if (originalInput.trim() === '') {
        isUpdating = true;
        textInput.value = '';
        isUpdating = false;
        return;
    }

    // Separamos tokens para respetar espacios
    const tokens = originalInput.match(/\S+|\s+/g) || [];
    // Solo palabras sin espacios
    const words = tokens.filter(token => token.trim() !== '');

    // Invertimos palabras y luego invertimos el orden
    const invertedWords = words.map(reverseString).reverse();

    // Reconstruimos respetando espacios
    let wordIndex = 0;
    const resultTokens = tokens.map(token => {
        if (token.trim() === '') {
            return token; // espacios intactos
        } else {
            return invertedWords[wordIndex++];
        }
    });

    isUpdating = true;
    textInput.value = resultTokens.join('');
    isUpdating = false;
}, 300);

textInput.addEventListener('input', (e) => {
    if (isUpdating) return;

    const currentVal = e.target.value;

    // Detectamos si el último caracter es espacio
    const lastChar = currentVal.slice(-1);

    if (lastChar === ' ') {
        // Actualizamos originalInput sin invertir ni cambiar input visible
        // Para que el espacio no invierta nada ni cambie la vista
        originalInput += ' '; // añadimos espacio al texto original
        // No actualizamos textInput.value para que no cambie la vista
    } else {
        // Aquí añadimos el último carácter a originalInput
        // Si el usuario borró algo, actualizamos originalInput al completo para sincronizar
        if (currentVal.length < originalInput.length) {
            // El usuario borró caracteres, actualizamos originalInput completo
            originalInput = currentVal;
        } else {
            // Añadimos el nuevo carácter al originalInput
            originalInput += lastChar;
        }

        // Aplicamos inversión automática usando originalInput limpio
        doAutoInvert();
    }
});

// Botón manual
reverseButton.addEventListener('click', () => {
    if (isUpdating) return;

    const words = originalInput.match(/\S+/g) || [];
    const invertedWordsManual = words.map(reverseString).reverse();

    const tokens = originalInput.match(/\S+|\s+/g) || [];
    let wordIndex = 0;
    const resultTokens = tokens.map(token => {
        if (token.trim() === '') {
            return token;
        } else {
            return invertedWordsManual[wordIndex++];
        }
    });

    const invertedText = resultTokens.join('');

    textInput.value = invertedText;

    if (!isAnyAutoModeOn()) {
        historyArray.push({ text: invertedText, auto: true });
        updateHistoryList();
        textInput.value = '';
        originalInput = '';
    }
});

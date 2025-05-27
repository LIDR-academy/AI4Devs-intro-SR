document.addEventListener('DOMContentLoaded', () => {
    const stringInput = document.getElementById('stringInput');
    const reverseButton = document.getElementById('reverseButton');
    const autoModeCheckbox = document.getElementById('autoModeCheckbox');
    const reversedStringOutput = document.getElementById('reversedStringOutput');
    const copyButton = document.getElementById('copyButton');
    const reloadButton = document.getElementById('reloadButton');
    const historyList = document.getElementById('historyList');

    let historyArray = []; // Almacena el historial en memoria

    // --- Funciones Principales ---

    function reverseString(str) {
        return str.split('').reverse().join('');
    }

    function updateOutput(originalStr, reversedStr) {
        if (originalStr.trim() === '') {
            reversedStringOutput.textContent = '-';
            copyButton.disabled = true;
            reloadButton.disabled = true;
        } else {
            reversedStringOutput.textContent = reversedStr;
            copyButton.disabled = false;
            reloadButton.disabled = false;
        }
    }

    function addToHistory(str) {
        if (str && str !== '-' && !historyArray.includes(str)) { // Evita duplicados exactos
            historyArray.unshift(str); // Añade al inicio para ver el más reciente arriba
            renderHistory();
        }
    }

    function renderHistory() {
        historyList.innerHTML = ''; // Limpia la lista actual
        historyArray.forEach(item => {
            const listItem = document.createElement('li');
            listItem.textContent = item;
            historyList.appendChild(listItem);
        });
    }

    function performReverseAction() {
        const originalText = stringInput.value;
        const reversedText = reverseString(originalText);
        updateOutput(originalText, reversedText);

        if (!autoModeCheckbox.checked && originalText.trim() !== '') {
            addToHistory(reversedText);
        }
    }

    // --- Event Listeners ---

    reverseButton.addEventListener('click', () => {
        performReverseAction();
    });

    stringInput.addEventListener('input', () => {
        if (autoModeCheckbox.checked) {
            performReverseAction();
        } else {
            // Si no está en modo automático, y el input se vacía, limpiar el output
            if (stringInput.value.trim() === '') {
                updateOutput('', '-');
            }
        }
    });

    autoModeCheckbox.addEventListener('change', () => {
        // Si se activa el modo automático y hay texto, invertirlo
        if (autoModeCheckbox.checked && stringInput.value.trim() !== '') {
            performReverseAction();
        }
        // El botón invertir sigue siendo funcional independientemente del modo automático.
    });

    copyButton.addEventListener('click', async () => {
        const textToCopy = reversedStringOutput.textContent;
        if (textToCopy && textToCopy !== '-') {
            try {
                await navigator.clipboard.writeText(textToCopy);
                // Podrías añadir una pequeña notificación de "Copiado!" aquí
                // alert('¡Texto copiado al portapapeles!');

                // Guardar en historial si modo automático está activado Y se copió
                if (autoModeCheckbox.checked) {
                    addToHistory(textToCopy);
                }
            } catch (err) {
                console.error('Error al copiar texto: ', err);
                // alert('Error al copiar texto.');
            }
        }
    });

    reloadButton.addEventListener('click', () => {
        const textToReload = reversedStringOutput.textContent;
        if (textToReload && textToReload !== '-') {
            stringInput.value = textToReload;
            stringInput.focus(); // Opcional: poner foco en el input

            // Si el modo automático está activo, la inversión se hará por el 'input' event listener
            // Si no, el usuario puede presionar "invertir" de nuevo o modificar.
            // Para consistencia, podemos llamar a performReverseAction si autoMode es true.
             if (autoModeCheckbox.checked) {
                performReverseAction();
            }
        }
    });

    // Inicializar estado de botones
    updateOutput('', '-');
});
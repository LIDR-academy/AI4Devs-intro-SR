const inputText = document.getElementById('inputText');
const autoMode = document.getElementById('autoMode');
const reversedOutput = document.getElementById('reversedOutput');
const historyList = document.getElementById('historyList');

let history = [];
let debounceTimeout = null;

function reverseString(str) {
  return str.split('').reverse().join('');
}

function renderHistory() {
  historyList.innerHTML = '';
  history.forEach((entry) => {
    const li = document.createElement('li');

    const textSpan = document.createElement('span');
    textSpan.className = 'string-text';
    textSpan.textContent = entry;

    const reloadBtn = document.createElement('button');
    reloadBtn.textContent = 'Recargar';
    reloadBtn.onclick = () => {
      inputText.value = reverseString(entry);
      handleInput();
    };

    const copyBtn = document.createElement('button');
    copyBtn.textContent = 'Copiar';
    copyBtn.onclick = () => {
      navigator.clipboard.writeText(entry);
      if (autoMode.checked && !history.includes(entry)) {
        history.push(entry);
        renderHistory();
      }
    };

    li.appendChild(textSpan);
    li.appendChild(reloadBtn);
    li.appendChild(copyBtn);
    historyList.appendChild(li);
  });
}

function handleInput() {
  const inputVal = inputText.value.trim();
  const reversed = reverseString(inputVal);

  // Mostrar siempre la inversión
  if (inputVal) {
    reversedOutput.textContent = autoMode.checked
      ? `Reversado: ${reversed} (modo automático)`
      : `Reversado: ${reversed}`;
  } else {
    reversedOutput.textContent = '';
    return;
  }

  // Modo automático: usar debounce para guardar después de pausa
  if (autoMode.checked) {
    clearTimeout(debounceTimeout);
    debounceTimeout = setTimeout(() => {
      if (inputVal && !history.includes(reversed)) {
        history.push(reversed);
        renderHistory();
      }
    }, 600); // Esperar 600ms desde la última tecla presionada
  }
}

// Modo manual: guardar solo al presionar Enter
inputText.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && !autoMode.checked) {
    const inputVal = inputText.value.trim();
    const reversed = reverseString(inputVal);
    if (inputVal && !history.includes(reversed)) {
      history.push(reversed);
      renderHistory();
    }
    inputText.value = '';
    reversedOutput.textContent = '';
  }
});

inputText.addEventListener('input', handleInput);

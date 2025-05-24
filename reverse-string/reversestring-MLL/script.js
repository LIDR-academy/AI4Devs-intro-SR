const textInput = document.getElementById('textInput');
const autoModeCheckbox = document.getElementById('autoMode');
const reverseBtn = document.getElementById('reverseBtn');
const copyBtn = document.getElementById('copyBtn');
const output = document.getElementById('output');
const copyFeedback = document.getElementById('copyFeedback');
const historyList = document.getElementById('historyList');

let history = [];

function reverseString(str) {
  return str.split('').reverse().join('');
}

function updateOutput() {
  const original = textInput.value.trim();
  const reversed = reverseString(original);
  output.textContent = reversed;
  output.style.opacity = '0.6';
  setTimeout(() => output.style.opacity = '1', 100);
  copyBtn.disabled = !reversed;
}

function addToHistory(entry) {
  if (history.length > 0 && history[0].original === entry.original) return;
  history.unshift(entry);
  truncateHistory();
  renderHistory();
}

function renderHistory() {
  historyList.innerHTML = '';
  history.forEach(item => {
    const li = document.createElement('li');
    li.className = 'history-item';

    const span = document.createElement('code');
    span.textContent = item.reversed;
    if (item.autoMode) {
      span.classList.add('inverted');
      span.title = 'Generado en modo automático';
    }

    const actions = document.createElement('div');
    actions.className = 'history-actions';

    const copy = document.createElement('button');
    copy.textContent = '📋';
    copy.title = 'Copiar';
    copy.onclick = () => {
      copyToClipboard(item.reversed);
      showFeedback();
    };

    const reuse = document.createElement('button');
    reuse.textContent = '🔁';
    reuse.title = 'Usar';
    reuse.onclick = () => reloadOriginal(item.original);

    actions.appendChild(copy);
    actions.appendChild(reuse);
    li.appendChild(span);
    li.appendChild(actions);
    historyList.appendChild(li);
  });
}

function copyToClipboard(text) {
  navigator.clipboard.writeText(text);
}

function showFeedback() {
  copyFeedback.style.display = 'inline';
  setTimeout(() => copyFeedback.style.display = 'none', 2000);
}

function reloadOriginal(original) {
  textInput.value = original;
  updateOutput();
}

function truncateHistory() {
  if (history.length > 20) {
    history = history.slice(0, 20);
  }
}

// EVENTOS

textInput.addEventListener('input', () => {
  if (autoModeCheckbox.checked) {
    updateOutput();
  }
});

reverseBtn.addEventListener('click', () => {
  updateOutput();
  const original = textInput.value.trim();
  if (!original) return;
  const reversed = reverseString(original);
  addToHistory({
    original,
    reversed,
    autoMode: autoModeCheckbox.checked,
    timestamp: Date.now()
  });
});

copyBtn.addEventListener('click', () => {
  const original = textInput.value.trim();
  if (!original) return;
  const reversed = reverseString(original);
  copyToClipboard(reversed);
  showFeedback();
  addToHistory({
    original,
    reversed,
    autoMode: autoModeCheckbox.checked,
    timestamp: Date.now()
  });
});

autoModeCheckbox.addEventListener('change', () => {
  const isAuto = autoModeCheckbox.checked;
  reverseBtn.style.display = isAuto ? 'none' : 'inline-block';
  if (isAuto) updateOutput();
});

// Inicializar visibilidad
reverseBtn.style.display = autoModeCheckbox.checked ? 'none' : 'inline-block';

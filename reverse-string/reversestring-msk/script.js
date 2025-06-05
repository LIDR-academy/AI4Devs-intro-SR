const textInput = document.getElementById("textInput");
const historyList = document.getElementById("historyList");
const autoMode = document.getElementById("autoMode");
const reversePreview = document.getElementById("preview");
const reverseBtn = document.getElementById("reverseBtn");

let history = [];

function reverseString(str) {
  return str.split('').reverse().join('');
}

function updateHistory() {
  historyList.innerHTML = '';
  const recentHistory = history.slice().reverse();
  recentHistory.forEach((entry) => {
    const li = document.createElement("li");
    li.className = "history-item";
    li.innerHTML = `
      <span class="reversed">${entry.reversed}</span>
      <button onclick="copyToClipboard('${entry.reversed}')">📋</button>
      <button onclick="reloadInput('${entry.original}')">⟳</button>
    `;
    historyList.appendChild(li);
  });
}

function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
    saveToHistory(textInput.value);
  });
}

function reloadInput(text) {
  textInput.value = text;
  if (autoMode.checked) {
    updatePreview(text);
  }
}

function saveToHistory(original) {
  const reversed = reverseString(original);
  const exists = history.find(item => item.reversed === reversed);
  if (!exists) {
    history.push({ original, reversed });
    if (history.length > 10) history.shift();
    updateHistory();
  }
}

function updatePreview(inputValue) {
  if (!inputValue) {
    reversePreview.textContent = "";
    return;
  }
  const reversed = reverseString(inputValue);
  reversePreview.textContent = reversed;
}

textInput.addEventListener("input", () => {
  if (autoMode.checked) {
    updatePreview(textInput.value);
  }
});

textInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && autoMode.checked) {
    saveToHistory(textInput.value);
  }
});

reverseBtn.addEventListener("click", () => {
  if (!autoMode.checked) {
    saveToHistory(textInput.value);
  }
});

window.copyToClipboard = copyToClipboard;
window.reloadInput = reloadInput;

window.addEventListener("DOMContentLoaded", () => {
  autoMode.checked = true;
  updatePreview(textInput.value);
});

const inputText = document.getElementById("inputText");
const outputText = document.getElementById("outputText");
const reverseBtn = document.getElementById("reverse-btn");
const copyBtn = document.getElementById("copy-btn");
const historyContainer = document.getElementById("history");
const autoModeCheckbox = document.getElementById("autoMode");

let history = [];

function reverseString(str) {
  return str.split("").reverse().join("");
}

function updateOutput() {
  const reversed = reverseString(inputText.value);
  outputText.textContent = reversed;
}

function addToHistory(str) {
  history.unshift(str);
  renderHistory();
}

function renderHistory() {
  historyContainer.innerHTML = "";
  history.forEach((item, index) => {
    const entry = document.createElement("div");
    entry.className = "history-entry";

    const text = document.createElement("span");
    text.textContent = item;

    const buttons = document.createElement("div");
    buttons.className = "history-buttons";

    const copyBtn = document.createElement("button");
    copyBtn.textContent = "📋";
    copyBtn.onclick = () => {
      navigator.clipboard.writeText(item);
    };

    const reloadBtn = document.createElement("button");
    reloadBtn.textContent = "🔄";
    reloadBtn.onclick = () => {
      inputText.value = reverseString(item);
      updateOutput();
    };

    buttons.appendChild(copyBtn);
    buttons.appendChild(reloadBtn);
    entry.appendChild(text);
    entry.appendChild(buttons);
    historyContainer.appendChild(entry);
  });
}

reverseBtn.addEventListener("click", () => {
  updateOutput(); // Just reverse and show, no saving here
});

copyBtn.addEventListener("click", () => {
  const value = outputText.textContent;
  if (value) {
    navigator.clipboard.writeText(value);

    if (autoModeCheckbox.checked || !autoModeCheckbox.checked) {
      // Always save to history on "Copy" click
      addToHistory(value);
    }
  }
});

inputText.addEventListener("input", () => {
	updateButtonVisibility();
	
  if (autoModeCheckbox.checked) {
    updateOutput(); // Auto reverse on typing
  }
});

function updateButtonVisibility() {
  const show = inputText.value.length > 3;
  reverseBtn.style.display = show ? "inline-block" : "none";
  copyBtn.style.display = show ? "inline-block" : "none";
}

updateButtonVisibility();
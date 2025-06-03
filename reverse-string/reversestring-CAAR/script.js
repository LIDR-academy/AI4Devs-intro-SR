const textInput = document.getElementById("textInput");
const reverseBtn = document.getElementById("reverseBtn");
const autoMode = document.getElementById("autoMode");
const output = document.getElementById("output");
const copyBtn = document.getElementById("copyBtn");
const historyList = document.getElementById("historyList");
const modal = document.getElementById("modal");

let currentReversed = "";

function reverseString(str) {
  return str.split("").reverse().join("");
}

function updateOutput(text) {
  currentReversed = reverseString(text);
  output.textContent = currentReversed;
}

function showModal() {
  modal.style.display = "block";
  setTimeout(() => (modal.style.display = "none"), 3000);
}

function addToHistory(original, reversed) {
  const item = document.createElement("div");
  item.className = "history-item";
  item.innerHTML = `
    <div class="history-text">
        <div><strong>Original:</strong> ${original}</div>
        <div><strong>Reversado:</strong> ${reversed}</div>
    </div>
    <div>
        <button class="icon-btn" title="Copiar" onclick="navigator.clipboard.writeText('${reversed}')">📋</button>
        <button class="icon-btn" title="Cargar en input" onclick="loadToInput('${reversed}')">🔁</button>
    </div>
    `;
  historyList.appendChild(item);
}

function loadToInput(text) {
  textInput.value = text;
  if (autoMode.checked) updateOutput(text);
}

textInput.addEventListener("input", (e) => {
  const text = e.target.value;
  if (autoMode.checked) {
    updateOutput(text);
  }
});

autoMode.addEventListener("change", () => {
  reverseBtn.disabled = autoMode.checked;
  copyBtn.disabled = !autoMode.checked;
  if (autoMode.checked && textInput.value) {
    updateOutput(textInput.value);
  }
});

reverseBtn.addEventListener("click", () => {
  const text = textInput.value;
  if (text) {
    updateOutput(text);
    addToHistory(text, currentReversed);
    showModal();
  }
});

copyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(currentReversed);
  addToHistory(textInput.value, currentReversed);
});

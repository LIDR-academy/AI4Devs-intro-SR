const input = document.getElementById("textInput");
const reverseBtn = document.getElementById("reverseBtn");
const copyBtn = document.getElementById("copyBtn");
const outputBox = document.getElementById("outputBox");
const autoModeCheckbox = document.getElementById("autoMode");
const historyList = document.getElementById("historyList");

let history = [];

function reverseText(text) {
  return text.split("").reverse().join("");
}

function updateOutput(text) {
  if (!text) {
    outputBox.textContent = "Type something above";
    copyBtn.disabled = true;
  } else {
    outputBox.textContent = reverseText(text);
    copyBtn.disabled = false;
  }
}

function updateHistory(text) {
  const exists = history[0] === text;
  const alreadyIn = history.includes(text);

  if (!exists) {
    if (alreadyIn) {
      history = history.filter((item) => item !== text);
    }
    history.unshift(text);
    renderHistory();
  }
}

function renderHistory() {
  historyList.innerHTML = "";
  history.forEach((item) => {
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.textContent = item;
    span.title = item;

    const actions = document.createElement("div");
    actions.className = "history-actions";

    const copy = document.createElement("button");
    copy.textContent = "Copy";
    copy.addEventListener("click", () => {
      navigator.clipboard.writeText(reverseText(item));
      alert("Copied to clipboard!");
    });

    const edit = document.createElement("button");
    edit.textContent = "Edit";
    edit.addEventListener("click", () => {
      input.value = item;
      if (autoModeCheckbox.checked) updateOutput(item);
    });

    actions.appendChild(copy);
    actions.appendChild(edit);
    li.appendChild(span);
    li.appendChild(actions);
    historyList.appendChild(li);
  });
}

input.addEventListener("input", () => {
  const value = input.value;
  const autoMode = autoModeCheckbox.checked;
  reverseBtn.disabled = !value || autoMode;
  if (autoMode) updateOutput(value);
  else updateOutput("");
});

autoModeCheckbox.addEventListener("change", () => {
  const value = input.value;
  if (autoModeCheckbox.checked) {
    updateOutput(value);
    reverseBtn.disabled = true;
  } else {
    updateOutput("");
    reverseBtn.disabled = !value;
  }
});

reverseBtn.addEventListener("click", () => {
  const value = input.value;
  if (value) updateOutput(value);
});

copyBtn.addEventListener("click", () => {
  const text = outputBox.textContent;
  if (text && text !== "Type something above") {
    navigator.clipboard.writeText(text);
    alert("Copied to clipboard!");
    updateHistory(input.value);
  }
});

const input = document.getElementById("textInput");
const reverseBtn = document.getElementById("reverseBtn");
const copyBtn = document.getElementById("copyBtn");
const outputBox = document.getElementById("outputBox");
const autoModeCheckbox = document.getElementById("autoMode");
const historyList = document.getElementById("historyList");
const historyTitle = document.querySelector(".history-title");

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
  if (history.length === 0) {
    historyTitle.innerHTML = '<span class="icon">\uD83D\uDCD3</span> History must be written!';
    return;
  }

  historyTitle.innerHTML = '<span class="icon">\uD83D\uDCD3</span> Past entries:';

  history.forEach((item) => {
    const li = document.createElement("li");
    const container = document.createElement("div");
    container.style.display = "flex";
    container.style.alignItems = "center";
    container.style.justifyContent = "space-between";
    container.style.width = "100%";

    const span = document.createElement("span");
    span.textContent = item;
    span.title = item;
    span.style.maxWidth = "50%";
    span.style.overflow = "hidden";
    span.style.textOverflow = "ellipsis";
    span.style.whiteSpace = "nowrap";

    const actions = document.createElement("div");
    actions.className = "history-actions";

    const copy = document.createElement("button");
    copy.textContent = "Copy";
    copy.addEventListener("click", () => {
      navigator.clipboard.writeText(reverseText(item));
      showToast("Copied to clipboard!");
    });

    const edit = document.createElement("button");
    edit.textContent = "Edit";
    edit.addEventListener("click", () => {
      input.value = item;
      input.focus();
      if (autoModeCheckbox.checked) updateOutput(item);
    });

    actions.appendChild(copy);
    actions.appendChild(edit);
    container.appendChild(span);
    container.appendChild(actions);
    li.appendChild(container);
    historyList.appendChild(li);
  });
}

function showToast(message) {
  const toast = document.createElement("div");
  toast.textContent = message;
  toast.style.position = "fixed";
  toast.style.bottom = "1rem";
  toast.style.right = "1rem";
  toast.style.backgroundColor = "#28a745";
  toast.style.color = "white";
  toast.style.padding = "0.75rem 1.25rem";
  toast.style.borderRadius = "0.5rem";
  toast.style.boxShadow = "0 0.5rem 1rem rgba(0,0,0,0.15)";
  toast.style.zIndex = 1000;
  document.body.appendChild(toast);
  setTimeout(() => {
    toast.remove();
  }, 3000);
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
    showToast("Copied to clipboard!");
    updateHistory(input.value);
    input.value = "";
    input.focus();
    updateOutput("");
  }
});

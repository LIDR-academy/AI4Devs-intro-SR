const input = document.getElementById("textInput");
const reverseBtn = document.getElementById("reverseBtn");
const copyBtn = document.getElementById("copyBtn");
const outputBox = document.getElementById("outputBox");
const autoModeCheckbox = document.getElementById("autoMode");
const historyList = document.getElementById("historyList");
const historyTitle = document.querySelector(".history-title");

let history = [];
let clearBtn = null;

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

  if (!clearBtn) {
    clearBtn = document.createElement("button");
    clearBtn.innerHTML = 'Clean history <span class="icon">🗑️</span>';
    clearBtn.className = "clear-history-btn";
    clearBtn.addEventListener("click", () => {
      history = [];
      renderHistory();
    });
  }

  const historyText = document.getElementById("historyTitleText");
  if (history.length === 0) {
    historyText.textContent = "History must be written!";
    if (clearBtn.parentNode) clearBtn.remove();
    return;
  }

  historyText.textContent = "Past entries:";
  if (!clearBtn.parentNode) {
    historyTitle.appendChild(clearBtn);
  }

  history.forEach((item) => {
    const li = document.createElement("li");
    li.className = "history-item";

    const container = document.createElement("div");
    container.className = "entry-container";

    const span = document.createElement("span");
    span.textContent = item;
    span.title = item;

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
  toast.className = "toast";
  toast.textContent = message;
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

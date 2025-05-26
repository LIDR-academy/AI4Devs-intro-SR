const input = document.getElementById("textInput");
const reverseBtn = document.getElementById("reverseBtn");
const result = document.getElementById("result");
const historyList = document.getElementById("historyList");
const autoMode = document.getElementById("autoMode");

let history = [];

function reverseString(str) {
  return str.split("").reverse().join("");
}

function renderHistory() {
  historyList.innerHTML = "";

  history.forEach((item, index) => {
    const li = document.createElement("li");
    li.textContent = item;

    const copyBtn = document.createElement("button");
    copyBtn.textContent = "📋 Copiar";
    copyBtn.onclick = () => {
      navigator.clipboard.writeText(item);
    };

    const reloadBtn = document.createElement("button");
    reloadBtn.textContent = "↩️ Cargar";
    reloadBtn.onclick = () => {
      input.value = item;
      updateResult();
    };

    li.appendChild(copyBtn);
    li.appendChild(reloadBtn);
    historyList.appendChild(li);
  });
}

function updateResult() {
  const reversed = reverseString(input.value);
  result.textContent = reversed;
  return reversed;
}

reverseBtn.onclick = () => {
  const reversed = updateResult();

  if (!autoMode.checked) {
    history.unshift(reversed);
    renderHistory();
  }
};

autoMode.onchange = () => {
  if (autoMode.checked) {
    input.addEventListener("input", autoReverseHandler);
  } else {
    input.removeEventListener("input", autoReverseHandler);
  }
};

function autoReverseHandler() {
  const reversed = updateResult();

  // Solo se agrega al historial cuando el usuario presiona copiar
  if (!history.includes(reversed)) {
    const copyListener = () => {
      history.unshift(reversed);
      renderHistory();
      navigator.clipboard.writeText(reversed);
      reverseBtn.removeEventListener("click", copyListener);
    };

    reverseBtn.addEventListener("click", copyListener);
  }
}
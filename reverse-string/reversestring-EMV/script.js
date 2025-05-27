const textInput = document.getElementById("textInput");
const reverseBtn = document.getElementById("reverseBtn");
const historyContainer = document.getElementById("history");
const autoModeCheckbox = document.getElementById("autoMode");

let history = [];

function reverseString(str) {
  return str.split("").reverse().join("");
}

function addToHistory(original, reversed) {
  const entry = { original, reversed };
  history.push(entry);
  renderHistory();
}

function renderHistory() {
  historyContainer.innerHTML = "";

  history.forEach((item, index) => {
    const div = document.createElement("div");
    div.className = "history-item";
    div.innerHTML = `
      <strong>${item.reversed}</strong>
      <button onclick="copyToClipboard('${item.reversed}')">📋 Copiar</button>
      <button onclick="reloadInput(${index})">🔁 Cargar</button>
    `;
    historyContainer.appendChild(div);
  });
}

/* function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
    const original = history.find(h => h.reversed === text).original;
    if (autoModeCheckbox.checked) {
      addToHistory(original, text); // solo en modo automático se guarda aquí
    }
  });
} */

  function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
      if (autoModeCheckbox.checked) {
        const input = textInput.value.trim();
        const reversed = reverseString(input);
        if (reversed === text) {
          addToHistory(input, reversed);
          textInput.value = "";
          textInput.focus();
        }
      }
    });
  }

function reloadInput(index) {
  textInput.value = history[index].original;
  if (autoModeCheckbox.checked) {
    handleAutoReverse();
  }
}

function handleReverse() {
  const input = textInput.value.trim();
  if (!input) return;
  const reversed = reverseString(input);
  addToHistory(input, reversed);
}

function handleAutoReverse() {
  if (autoModeCheckbox.checked) {
    const input = textInput.value.trim();
    if (!input) return;
    const reversed = reverseString(input);
    document.querySelector("#reverseBtn").disabled = true;
    renderPreview(reversed);
  } else {
    document.querySelector("#reverseBtn").disabled = false;
  }
}

/*function renderPreview(reversed) {
  const preview = document.getElementById("preview") || document.createElement("div");
  preview.id = "preview";
  preview.innerHTML = `<p>Resultado: <strong>${reversed}</strong></p>`;
  textInput.insertAdjacentElement("afterend", preview);
}*/

function renderPreview(reversed) {
    let preview = document.getElementById("preview");
    if (!preview) {
      preview = document.createElement("div");
      preview.id = "preview";
      textInput.insertAdjacentElement("afterend", preview);
    }
  
    preview.innerHTML = `
      <p>Resultado: <strong>${reversed}</strong></p>
      <button id="copyAutoBtn">📋 Copiar</button>
      <span id="copyStatus" style="margin-left: 1rem; color: green;"></span>
    `;
  
    const copyBtn = document.getElementById("copyAutoBtn");
    const copyStatus = document.getElementById("copyStatus");
  
    copyBtn.onclick = () => {
      if (!reversed) return;
  
      navigator.clipboard.writeText(reversed).then(() => {
        const original = textInput.value.trim();
        if (original) {
          addToHistory(original, reversed);
        }
  
        // Feedback visual
        copyStatus.textContent = "Copiado ✅";
  
        // Limpieza de input y reinicio de preview
        textInput.value = "";
        textInput.focus();
  
        setTimeout(() => {
          copyStatus.textContent = "";
          document.getElementById("preview").innerHTML = "";
        }, 2000);
      });
    };
  }

textInput.addEventListener("input", handleAutoReverse);
reverseBtn.addEventListener("click", handleReverse);
const input = document.getElementById("textInput");
const reverseBtn = document.getElementById("reverseBtn");
const autoMode = document.getElementById("autoMode");
const historyList = document.getElementById("historyList");
const alertContainer = document.getElementById("alertContainer");

let history = [];

function reverseString(str) {
  return str.split("").reverse().join("");
}

function showAlert(type, message) {
  const icons = {
    success: "bi-check-circle-fill",
    info: "bi-info-circle-fill",
    warning: "bi-exclamation-triangle-fill",
    danger: "bi-x-circle-fill"
  };

  const alert = document.createElement("div");
  alert.className = `alert alert-${type} d-flex align-items-center alert-dismissible fade show`;
  alert.role = "alert";
  alert.innerHTML = `
    <i class="bi ${icons[type]} me-2"></i>
    <div>${message}</div>
    <button type="button" class="btn-close ms-auto" data-bs-dismiss="alert" aria-label="Close"></button>
  `;
  alertContainer.appendChild(alert);

  setTimeout(() => {
    alert.classList.remove("show");
    alert.classList.add("hide");
    setTimeout(() => alert.remove(), 500);
  }, 5000);
}

function updateHistoryList() {
  historyList.innerHTML = "";
  history.forEach((entry) => {
    const listItem = document.createElement("li");
    listItem.className = "list-group-item d-flex justify-content-between align-items-center";

    const textSpan = document.createElement("span");
    textSpan.textContent = entry;

    const buttonGroup = document.createElement("div");
    buttonGroup.className = "btn-group";

    const copyBtn = document.createElement("button");
    copyBtn.className = "btn btn-outline-secondary btn-sm";
    copyBtn.innerHTML = '<i class="bi bi-clipboard"></i>';
    copyBtn.title = "Copiar";
    copyBtn.onclick = () => {
      navigator.clipboard.writeText(entry);
      showAlert("success", "📋 Texto copiado al portapapeles.");
      if (autoMode.checked) {
        if (!history.includes(entry)) {
          history.push(entry);
          updateHistoryList();
        }
      }
    };

    const reloadBtn = document.createElement("button");
    reloadBtn.className = "btn btn-outline-primary btn-sm";
    reloadBtn.innerHTML = '<i class="bi bi-arrow-counterclockwise"></i>';
    reloadBtn.title = "Recargar";
    reloadBtn.onclick = () => {
      input.value = reverseString(entry);
      showAlert("info", "⤴️ Texto recargado al campo.");
    };

    buttonGroup.appendChild(copyBtn);
    buttonGroup.appendChild(reloadBtn);

    listItem.appendChild(textSpan);
    listItem.appendChild(buttonGroup);
    historyList.appendChild(listItem);
  });
}

function processInput() {
  const originalText = input.value.trim();
  if (!originalText) {
    showAlert("danger", "❌ Por favor, introduce algún texto antes de invertir.");
    return;
  }
  const reversed = reverseString(originalText);
  input.value = reversed;

  if (!autoMode.checked) {
    if (!history.includes(reversed)) {
      history.push(reversed);
      updateHistoryList();
    }
    showAlert("success", "✅ Texto invertido y agregado al historial.");
  }
}

input.addEventListener("input", () => {
  if (autoMode.checked) {
    const reversed = reverseString(input.value);
    input.value = reversed;
  }
});

reverseBtn.addEventListener("click", processInput);

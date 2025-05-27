// Variables globales
let history = [];
let currentReversedText = "";

// Referencias DOM
const textInput = document.getElementById("textInput");
const autoModeCheckbox = document.getElementById("autoMode");
const resultDisplay = document.getElementById("resultDisplay");
const resultCopyBtn = document.getElementById("resultCopyBtn");
const historyList = document.getElementById("historyList");
const historyCount = document.getElementById("historyCount");
const notification = document.getElementById("notification");

// Función para invertir texto
function reverseString(str) {
  return str.split("").reverse().join("");
}

// Función para mostrar notificación
function showNotification(message = "¡Texto copiado al portapapeles! 📋") {
  notification.textContent = message;
  notification.classList.add("show");
  setTimeout(() => {
    notification.classList.remove("show");
  }, 2000);
}

// Función para copiar al portapapeles
async function copyToClipboard(text) {
  try {
    await navigator.clipboard.writeText(text);
    showNotification();
  } catch (err) {
    // Fallback para navegadores que no soportan clipboard API
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.position = "fixed";
    textArea.style.left = "-999999px";
    textArea.style.top = "-999999px";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      document.execCommand("copy");
      showNotification();
    } catch (err) {
      showNotification("Error al copiar texto");
    }
    document.body.removeChild(textArea);
  }
}

// Función para agregar al historial
function addToHistory(original, reversed) {
  // Evitar duplicados exactos
  const exists = history.some(item => item.original === original && item.reversed === reversed);

  if (!exists && original.trim() !== "") {
    const historyItem = {
      id: Date.now(),
      original: original,
      reversed: reversed,
      timestamp: new Date(),
    };

    history.unshift(historyItem);
    updateHistoryDisplay();
  }
}

// Función para actualizar la visualización del historial
function updateHistoryDisplay() {
  historyCount.textContent = history.length;

  if (history.length === 0) {
    historyList.innerHTML = `
            <div class="empty-history">
                No hay inversiones en el historial aún. ¡Empieza escribiendo algo arriba!
            </div>
        `;
    return;
  }

  historyList.innerHTML = history
    .map(
      item => `
        <div class="history-item">
            <div class="history-content">
                <div class="original-text">Original: "${item.original}"</div>
                <div class="reversed-text">Invertido: "${item.reversed}"</div>
            </div>
            <div class="history-actions">
                <button class="btn btn-copy" onclick="copyFromHistory('${item.reversed.replace(
                  /'/g,
                  "\\'"
                )}')">
                    📋 Copiar
                </button>
                <button class="btn btn-reload" onclick="reloadToInput('${item.original.replace(
                  /'/g,
                  "\\'"
                )}')">
                    ↩️ Recargar
                </button>
            </div>
        </div>
    `
    )
    .join("");
}

// Función para copiar desde el historial
function copyFromHistory(text) {
  copyToClipboard(text);
}

// Función para recargar texto al input
function reloadToInput(text) {
  textInput.value = text;
  updateResult();
  textInput.focus();
  showNotification("Texto recargado en el campo de entrada 🔄");
}

// Función para actualizar el resultado
function updateResult() {
  const inputText = textInput.value;

  if (inputText.trim() === "") {
    resultDisplay.textContent = "El texto invertido aparecerá aquí...";
    currentReversedText = "";
    resultCopyBtn.style.display = "none";
    return;
  }

  currentReversedText = reverseString(inputText);
  resultDisplay.textContent = currentReversedText;
  resultCopyBtn.style.display = "flex";
}

// Función de inicialización cuando el DOM está listo
function initializeApp() {
  // Event listeners
  textInput.addEventListener("input", function () {
    if (autoModeCheckbox.checked) {
      updateResult();
    }
  });

  textInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      if (!autoModeCheckbox.checked) {
        updateResult();
      }
      // Al presionar Enter solo se invierte el texto, NO se agrega al historial
    }
  });

  // Event listener para el botón de copiar del resultado
  resultCopyBtn.addEventListener("click", function () {
    if (currentReversedText !== "" && textInput.value.trim() !== "") {
      copyToClipboard(currentReversedText);
      // Siempre agregar al historial cuando se copia manualmente
      addToHistory(textInput.value, currentReversedText);
    }
  });

  // Event listener para el checkbox
  autoModeCheckbox.addEventListener("change", function () {
    if (this.checked) {
      updateResult();
      resultDisplay.style.cursor = "default";
      resultDisplay.title = "";
    } else {
      resultDisplay.style.cursor = "default";
      resultDisplay.title = "";
    }
  });

  // Event listener adicional para el elemento visual personalizado del checkbox
  const checkboxCustom = document.querySelector(".checkbox-custom");
  checkboxCustom.addEventListener("click", function (e) {
    // Prevenir que el clic se propague y cause doble toggle
    e.preventDefault();
    e.stopPropagation();

    // Toggle manual del checkbox
    autoModeCheckbox.checked = !autoModeCheckbox.checked;

    // Disparar el evento change manualmente
    autoModeCheckbox.dispatchEvent(new Event("change"));
  });

  // Agregar funcionalidad de clic en el resultado para copiar (solo en modo automático)
  resultDisplay.addEventListener("click", function () {
    if (autoModeCheckbox.checked && currentReversedText !== "" && textInput.value.trim() !== "") {
      copyToClipboard(currentReversedText);
      addToHistory(textInput.value, currentReversedText);
    }
  });

  // Configuración inicial
  // El botón se muestra/oculta según haya contenido
}

// Inicializar la aplicación cuando el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", initializeApp);

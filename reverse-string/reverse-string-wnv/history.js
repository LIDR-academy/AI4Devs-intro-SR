import { reverseString } from "./script.js"; // Asegúrate de que la ruta sea correcta

let history = [];

function updateHistoryList() {
  const historyList = document.getElementById("historyList");
  historyList.innerHTML = ""; // Limpiar la lista antes de agregar los elementos
  history.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item.reversed;

    // Botón de copiar al portapapeles
    const copyButton = document.createElement("button");
    copyButton.textContent = "Copiar";
    copyButton.onclick = () => {
      navigator.clipboard.writeText(item.reversed);
    };

    // Botón para volver a cargar la cadena en el input
    const reloadButton = document.createElement("button");
    reloadButton.textContent = "Cargar";
    reloadButton.onclick = () => {
      document.getElementById("inputString").value = item.original;
    };

    // Agregar botones al elemento li
    li.appendChild(copyButton);
    li.appendChild(reloadButton);
    historyList.appendChild(li);
  });
}

function addToHistory(original) {
  const reversed = reverseString(original); // Aquí llamamos a reverseString, que se encuentra en script.js
  history.push({ original, reversed });
  updateHistoryList();
}

function getHistory() {
  return history;
}

export { addToHistory, getHistory, updateHistoryList };

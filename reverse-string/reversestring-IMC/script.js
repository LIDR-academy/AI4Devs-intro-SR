// script.js

// Global variables
const inputText = document.getElementById("inputText");
const reverseBtn = document.getElementById("reverseBtn");
const autoCheckbox = document.getElementById("autoCheckbox");
const autoDiv = document.getElementById("autoDiv");
const liveReverse = document.getElementById("liveReverse");
const saveAutoBtn = document.getElementById("saveAutoBtn");
const historyTable = document.getElementById("historyTable").querySelector("tbody");

const history = [];

// Utility: Reverse a string
function reverseString(str) {
  return str.split("").reverse().join("");
}

// Add entry to the history table
function addToTable(text) {
  history.push(text);

  const row = document.createElement("tr");

  const textCell = document.createElement("td");
  textCell.textContent = text;

  const actionCell = document.createElement("td");

  // Reload Button
  const reloadBtn = document.createElement("button");
  reloadBtn.className = "action-btn";
  reloadBtn.innerHTML = 'Reload <span>♻️</span>';
  reloadBtn.onclick = () => {
    inputText.value = text;
    inputText.focus();
  };

  // Copy Button
  const copyBtn = document.createElement("button");
  copyBtn.className = "action-btn";
  copyBtn.innerHTML = 'Copy <span>📋</span>';
  copyBtn.onclick = () => {
    navigator.clipboard.writeText(text).then(() => {
      alert("Copied to clipboard!");
    });
  };

  actionCell.appendChild(reloadBtn);
  actionCell.appendChild(copyBtn);

  row.appendChild(textCell);
  row.appendChild(actionCell);

  historyTable.appendChild(row);
}

// Handle reverse on button click
reverseBtn.addEventListener("click", () => {
  const value = inputText.value.trim();
  if (!value) {
    alert("Please enter a string to reverse.");
    return;
  }

  const reversed = reverseString(value);
  addToTable(reversed);
  inputText.value = "";
});

// Handle checkbox toggle
autoCheckbox.addEventListener("change", (e) => {
  autoDiv.style.display = e.target.checked ? "block" : "none";
  if (!e.target.checked) {
    liveReverse.textContent = "";
  }
});

// Live reverse on input when auto mode is enabled
inputText.addEventListener("input", () => {
  if (autoCheckbox.checked) {
    liveReverse.textContent = reverseString(inputText.value);
  }
});

// Save from auto mode
saveAutoBtn.addEventListener("click", () => {
  const text = liveReverse.textContent.trim();
  if (text) {
    addToTable(text);
  }
});

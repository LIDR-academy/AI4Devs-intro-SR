const inputField = document.getElementById('inputField');
const outputList = document.getElementById('outputList');
const previewCheckbox = document.getElementById('previewCheckbox');
const previewArea = document.getElementById('previewArea');

const outputs = []; // Keep outputs in memory

// Function to reverse a string
function reverseString(str) {
  return str.split('').reverse().join('');
}

// Function to update the preview
function updatePreview() {
  if (previewCheckbox.checked) {
    previewArea.style.display = 'block';
    previewArea.textContent = reverseString(inputField.value);
  } else {
    previewArea.style.display = 'none';
  }
}

// Function to add output to the list
function addOutput(original, reversed) {
  outputs.push({ original, reversed });

  const li = document.createElement('li');
  li.textContent = reversed;

  // Copy button
  const copyBtn = document.createElement('button');
  copyBtn.textContent = 'Copy';
  copyBtn.classList.add('btn');
  copyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(reversed);
    alert('Copied to clipboard!');
  });

  // Reload button
  const reloadBtn = document.createElement('button');
  reloadBtn.textContent = 'Reload';
  reloadBtn.classList.add('btn');
  reloadBtn.addEventListener('click', () => {
    inputField.value = original;
    updatePreview();
  });

  li.appendChild(copyBtn);
  li.appendChild(reloadBtn);
  outputList.appendChild(li);
}

// Handle input for live preview (auto-reverse)
inputField.addEventListener('input', () => {
  if (previewCheckbox.checked) {
    updatePreview();
  }
});

// Handle checkbox toggle
previewCheckbox.addEventListener('change', updatePreview);

// Handle Enter key to reverse and store
inputField.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();

    const inputText = inputField.value;
    if (!inputText) return;

    const reversed = reverseString(inputText);

    addOutput(inputText, reversed);

    inputField.value = '';
    updatePreview();
  }
});

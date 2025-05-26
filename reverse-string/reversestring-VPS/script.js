document.addEventListener('DOMContentLoaded', function () {
  const textInput = document.getElementById('textInput');
  const reverseButton = document.getElementById('reverseButton');
  const historyList = document.getElementById('historyList');
  const autoModeCheckbox = document.getElementById('autoMode');

  const reversedHistory = [];

  reverseButton.addEventListener('click', () => {
    const inputValue = textInput.value;
    if (inputValue.trim() === '') return;

    const reversed = reverseString(inputValue);
    reversedHistory.push(reversed);

    renderHistory();
    textInput.value = '';
    document.getElementById('autoPreview').textContent = '';
  });

  textInput.addEventListener('input', () => {
    if (autoModeCheckbox.checked) {
      const reversed = reverseString(textInput.value);
      document.getElementById('autoPreview').textContent = reversed;
    } else {
      document.getElementById('autoPreview').textContent = '';
    }
  });

  function reverseString(str) {
    return str.split('').reverse().join('');
  }

  function renderHistory() {
    historyList.innerHTML = '';
    reversedHistory.forEach((item, index) => {
      const li = document.createElement('li');

      const textSpan = document.createElement('span');
      textSpan.textContent = item;

      const copyBtn = document.createElement('button');
      copyBtn.textContent = 'Copiar';
      copyBtn.style.marginLeft = '10px';
      copyBtn.addEventListener('click', () => {
        navigator.clipboard.writeText(item);
        if (!reversedHistory.includes(item)) {
          reversedHistory.push(item);
          renderHistory();
        }
      });

      const reloadBtn = document.createElement('button');
      reloadBtn.textContent = 'Recargar';
      reloadBtn.style.marginLeft = '5px';
      reloadBtn.addEventListener('click', () => {
        textInput.value = item;
        if (autoModeCheckbox.checked) {
          document.getElementById('autoPreview').textContent = reverseString(item);
        } else {
          document.getElementById('autoPreview').textContent = '';
        }
      });

      li.appendChild(textSpan);
      li.appendChild(copyBtn);
      li.appendChild(reloadBtn);
      historyList.appendChild(li);
    });
  }
});
document.addEventListener('DOMContentLoaded', () => {
  const txtOriginal = document.getElementById('txtOriginalString');
  const chkMode = document.getElementById('chkMode');
  const btnCopy = document.getElementById('btnCopy');
  const btnReverse = document.getElementById('btnReverse');
  const reversedOutput = document.getElementById('reversedOutput');
  const historyList = document.getElementById('historyList');

  // Copiar al portapapeles
  btnCopy.addEventListener('click', () => {
    const text = txtOriginal.value;
    if (text.trim() === "") return;
    navigator.clipboard.writeText(text)
      .then(() => alert('Texto copiado al portapapeles.'))
      .catch(err => alert('Error al copiar: ' + err));
  });

  // Invertir cadena y actualizar la interfaz
  btnReverse.addEventListener('click', () => {
    const original = txtOriginal.value;
    const reversed = original.split('').reverse().join('');
    reversedOutput.textContent = reversed;

    if (chkMode.checked && reversed.trim() !== "") {
      const li = document.createElement('li');
      li.textContent = reversed;
      historyList.appendChild(li);
    }
  });
});

const inputTexto = document.getElementById('inputTexto');
const btnInvertir = document.getElementById('btnInvertir');
const btnCopiar = document.getElementById('btnCopiar');
const textoInvertido = document.getElementById('textoInvertido');
const modoAutomatico = document.getElementById('modoAutomatico');
const historialLista = document.getElementById('historial');

let historial = [];

function invertirTexto(texto) {
  return texto.split('').reverse().join('');
}

function mostrarTextoInvertido(texto) {
  textoInvertido.value = invertirTexto(texto);
}

function agregarAHistorial(textoOriginal) {
  if (!historial.includes(textoOriginal)) {
    historial.push(textoOriginal);
    actualizarHistorial();
  }
}

function actualizarHistorial() {
  historialLista.innerHTML = '';
  historial.forEach((texto) => {
    const li = document.createElement('li');
    li.className = 'list-group-item d-flex justify-content-between align-items-center';
    li.textContent = texto;

    const btnRecargar = document.createElement('button');
    btnRecargar.className = 'btn btn-sm btn-outline-secondary';
    btnRecargar.innerHTML = '<i class="fas fa-redo"></i> Recargar';
    btnRecargar.onclick = () => {
      inputTexto.value = texto;
      if (modoAutomatico.checked) {
        mostrarTextoInvertido(texto);
      } else {
        textoInvertido.value = '';
      }
    };

    li.appendChild(btnRecargar);
    historialLista.appendChild(li);
  });
}

btnInvertir.addEventListener('click', () => {
  const texto = inputTexto.value;
  if (texto.trim() === '') return;
  mostrarTextoInvertido(texto);
  if (!modoAutomatico.checked) {
    agregarAHistorial(texto);
  }
});

btnCopiar.addEventListener('click', () => {
  textoInvertido.select();
  document.execCommand('copy');
  if (modoAutomatico.checked) {
    agregarAHistorial(inputTexto.value);
  }
});

inputTexto.addEventListener('input', () => {
  if (modoAutomatico.checked) {
    const texto = inputTexto.value;
    mostrarTextoInvertido(texto);
  }
});

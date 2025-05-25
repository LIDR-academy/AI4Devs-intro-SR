const inputCadena = document.getElementById('input-cadena');
const resultado = document.getElementById('resultado');
const btnInvertir = document.getElementById('btn-invertir');
const listaHistorial = document.getElementById('lista-historial');
const modoAutomatico = document.getElementById('modo-automatico');

let historial = [];

// Invierte una cadena
function invertirCadena(str) {
  return str.split('').reverse().join('');
}

// Muestra el historial en la interfaz
function renderHistorial() {
  listaHistorial.innerHTML = '';
  historial.forEach((entrada, idx) => {
    const div = document.createElement('div');
    div.className = 'historial-entry';

    // Cadena original o invertida visual
    const span = document.createElement('span');
    span.className = 'historial-string';
    span.textContent = entrada.texto;
    if (entrada.invertido) {
      span.classList.add('invertido');
    }

    // Botón copiar
    const btnCopiar = document.createElement('button');
    btnCopiar.textContent = 'Copiar';
    btnCopiar.title = "Copiar al portapapeles";
    btnCopiar.onclick = () => {
      navigator.clipboard.writeText(entrada.texto);
      btnCopiar.textContent = "¡Copiado!";
      setTimeout(() => btnCopiar.textContent = "Copiar", 1200);
    };

    // Botón recargar al input
    const btnRecargar = document.createElement('button');
    btnRecargar.textContent = 'Recargar';
    btnRecargar.title = "Recargar esta cadena al input";
    btnRecargar.onclick = () => {
      inputCadena.value = entrada.texto;
      mostrarResultado();
    };

    div.appendChild(span);
    div.appendChild(btnCopiar);
    div.appendChild(btnRecargar);

    listaHistorial.appendChild(div);
  });
}

// Muestra el resultado invertido si está en modo automático
function mostrarResultado() {
  const valor = inputCadena.value;
  if (modoAutomatico.checked && valor.trim() !== '') {
    resultado.textContent = invertirCadena(valor);
  } else {
    resultado.textContent = '';
  }
}

// Lógica principal del botón "Invertir"
btnInvertir.addEventListener('click', (e) => {
  e.preventDefault();
  const cadenaOriginal = inputCadena.value.trim();
  if (!cadenaOriginal) return;

  // Guardar ORIGINAL
  historial.unshift({
    texto: cadenaOriginal,
    invertido: false
  });

  // Guardar INVERTIDO
  const invertida = invertirCadena(cadenaOriginal);
  historial.unshift({
    texto: invertida,
    invertido: true
  });

  renderHistorial();
  resultado.textContent = invertida;
  inputCadena.value = '';
  inputCadena.focus();
});

// Cambios en el input o el modo automático
inputCadena.addEventListener('input', mostrarResultado);
modoAutomatico.addEventListener('change', mostrarResultado);

// Inicializar
renderHistorial();
mostrarResultado();
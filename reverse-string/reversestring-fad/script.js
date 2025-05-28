let historial = [];

function invertirTexto() {
  const input = document.getElementById('inputTexto');
  const textoOriginal = input.value;
  const textoInvertido = textoOriginal.split('').reverse().join('');

  agregarAHistorial(textoInvertido);
  mostrarHistorial();

  const resultadoContainer = document.getElementById('resultado-container');
  resultadoContainer.style.display = 'block';
}

function agregarAHistorial(cadena) {
  historial.push(cadena);
}

function mostrarHistorial() {
  const resultadoDiv = document.getElementById('resultado');
  resultadoDiv.innerHTML = '';

  historial.forEach((cadena, index) => {
    const itemDiv = document.createElement('div');
    itemDiv.style.display = 'flex';
    itemDiv.style.justifyContent = 'space-between';
    itemDiv.style.alignItems = 'center';
    itemDiv.style.marginBottom = '5px';

    const texto = document.createElement('span');
    texto.textContent = cadena;
    texto.style.flex = '1';
    texto.style.textAlign = 'left';

    const accionesDiv = document.createElement('div');
    accionesDiv.style.display = 'flex';
    accionesDiv.style.gap = '10px';

    const botonCopiar = document.createElement('button');
    botonCopiar.textContent = '📋';
    botonCopiar.title = 'Copiar al portapapeles';
    botonCopiar.onclick = () => {
      navigator.clipboard.writeText(cadena);
    };

    const botonRecargar = document.createElement('button');
    botonRecargar.textContent = '🔄';
    botonRecargar.title = 'Recargar cadena al input';
    botonRecargar.onclick = () => {
      document.getElementById('inputTexto').value = cadena.split('').reverse().join('');
    };

    accionesDiv.appendChild(botonCopiar);
    accionesDiv.appendChild(botonRecargar);

    itemDiv.appendChild(texto);
    itemDiv.appendChild(accionesDiv);

    resultadoDiv.appendChild(itemDiv);
  });
}

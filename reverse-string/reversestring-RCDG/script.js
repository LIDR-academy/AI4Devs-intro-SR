document.addEventListener("DOMContentLoaded", function () {
  const entrada = document.getElementById("entradaTexto");
  const resultado = document.getElementById("resultado");
  const btnCopiar = document.getElementById("btnCopiar");
  const btnMostrar = document.getElementById("btnMostrar");
  const modoAutomatico = document.getElementById("modoAutomatico");
  const listaHistorico = document.getElementById("listaHistorico");

  function invertirTexto(texto) {
    return texto.split("").reverse().join("");
  }

  function actualizarResultado() {
    const texto = entrada.value;
    resultado.textContent = invertirTexto(texto);
  }

  function agregarAHistorico(textoOriginal) {
    const textoInvertido = invertirTexto(textoOriginal);
    const div = document.createElement("div");
    div.className = "item";
    div.innerHTML = `<strong>Original:</strong> ${textoOriginal} <br><strong>Invertido:</strong> ${textoInvertido}`;

    const btnRecargar = document.createElement("button");
    btnRecargar.textContent = "Recargar";
    btnRecargar.addEventListener("click", () => {
      entrada.value = textoOriginal;
      if (modoAutomatico.checked) {
        actualizarResultado();
      }
    });

    div.appendChild(btnRecargar);
    listaHistorico.prepend(div);
  }

  entrada.addEventListener("input", function () {
    if (modoAutomatico.checked) {
      actualizarResultado();
    }
  });

  btnMostrar.addEventListener("click", function () {
    actualizarResultado();
  });

  modoAutomatico.addEventListener("change", function () {
    btnMostrar.style.display = modoAutomatico.checked ? "none" : "inline-block";
    if (modoAutomatico.checked) {
      actualizarResultado();
    }
  });

  btnCopiar.addEventListener("click", function () {
    agregarAHistorico(entrada.value);
  });

  // Inicial
  btnMostrar.style.display = modoAutomatico.checked ? "none" : "inline-block";
  if (modoAutomatico.checked) {
    actualizarResultado();
  }
});

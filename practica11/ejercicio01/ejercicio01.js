function esBlanco(entradaCampo) {
  if (entradaCampo.type === "checkbox") {
    if (entradaCampo.checked) {
      return false;
    }
    return true;
  }
  if (entradaCampo.value === "") {
    return true;
  }
  return false;
}

function estiloRojo(entradaDiv) {
  entradaDiv.style.backgroundColor = "rgb(255, 0, 0)";
  entradaDiv.parentNode.style.backgroundColor = "rgb(255, 0, 0)";
  entradaDiv.parentNode.style.color = "white";
}

function estiloReset(entradaDiv) {
  entradaDiv.parentNode.style.backgroundColor = "white";
  entradaDiv.parentNode.style.color = "black";
  entradaDiv.style.backgroundColor = "white";
}

var entradasRequeridas = document.querySelectorAll(".requerido");
for (let element of entradasRequeridas) {
  element.onfocus = function () {
    this.style.backgroundColor = "yellow";
  };
}

var formulario = document.getElementById("formulario");
formulario.onsubmit = function (event) {
  console.log("xd");
  let error = false;

  for (let elemento of entradasRequeridas) {
    if (esBlanco(elemento)) {
      event.preventDefault();
      estiloRojo(elemento);
      error = true;
    } else {
      estiloReset(elemento);
    }
  }
  if (error) {
    let requeridos = document.querySelector("#error");
    requeridos.classList.remove("oculto");
    requeridos.classList.add("mensajeError");
    let mensajeError = document.querySelector("#errorMensaje");
    mensajeError.textContent =
      "Debes proporcionar todos los campos marcados como requeridos";
  }
};

formulario.onreset = function (event) {
  let mensajeError = document.querySelector("#error");
  console.log("reseteado");
  mensajeError.classList.remove("mensajeError");
  mensajeError.classList.add("oculto");
  for (let element of entradasRequeridas) {
    estiloReset(element);
  }
};

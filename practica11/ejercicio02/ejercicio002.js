function mouseover(event) {
  const imagenGrande = document.createElement("img");
  const xOff = 5 + event.pageX;
  const yOff = 5 + event.pageY;
  imagenGrande.src = this.src;
  imagenGrande.style.width = "130px";
  imagenGrande.style.position = "absolute";
  imagenGrande.style.top = yOff + "px";
  imagenGrande.style.left = xOff + "px";
  imagenGrande.classList.add("imagenGrande");
  document.body.appendChild(imagenGrande);
}
function mouseout() {
  const ultimaImagenAgregada = document.querySelector(".imagenGrande");
  ultimaImagenAgregada.remove();
}
function editarLibro() {
  let padreRow = this.parentNode.parentNode;
  let contenedor = document.createElement("div");
  let titulo = document.createElement("h1");
  let imagenOG = padreRow.childNodes[3].childNodes[1];
  let imagenNueva = document.createElement("img");
  let tituloLibro = padreRow.childNodes[5].childNodes[0].innerHTML;
  let artista = padreRow.childNodes[7].innerHTML;
  let anio = padreRow.childNodes[9].innerHTML;
  let genero = padreRow.childNodes[11].innerHTML;
  let tituloLibroInput = document.createElement("input");
  let artistaInput = document.createElement("input");
  let anioInput = document.createElement("input");
  let generoInput = document.createElement("input");
  let formulario = document.createElement("form");
  let botonEnviar = document.createElement("button");
  let botonCancelar = document.createElement("button");
  formulario.id = "formularioEditar";
  botonEnviar.innerHTML = "Guardar cambios";
  botonCancelar.innerHTML = "Cancelar";
  titulo.innerHTML = "Editar";
  imagenNueva.src = imagenOG.src;
  contenedor.classList.add("contenedor");
  contenedor.appendChild(titulo);
  contenedor.appendChild(imagenNueva);
  tituloLibroInput.value = tituloLibro;
  artistaInput.value = artista;
  anioInput.value = anio;
  generoInput.value = genero;
  formulario.appendChild(tituloLibroInput);
  formulario.appendChild(document.createElement("br"));
  formulario.appendChild(artistaInput);
  formulario.appendChild(document.createElement("br"));
  formulario.appendChild(anioInput);
  formulario.appendChild(document.createElement("br"));
  formulario.appendChild(generoInput);
  formulario.appendChild(document.createElement("br"));
  formulario.appendChild(botonCancelar);
  formulario.appendChild(botonEnviar);
  contenedor.appendChild(formulario);
  document.body.appendChild(contenedor);
  botonEnviar.onclick = function () {
    padreRow.childNodes[5].childNodes[0].innerHTML = tituloLibroInput.value;
    padreRow.childNodes[7].innerHTML = generoInput.value;
    padreRow.childNodes[9].innerHTML = artistaInput.value;
    padreRow.childNodes[11].innerHTML = anioInput.value;
    contenedor.remove();
  };
  botonCancelar.onclick = function () {
    contenedor.remove();
  };
}

var imagenesMiniatura = document.querySelectorAll(".imgMiniatura");
for (let imagenMiniatura of imagenesMiniatura) {
  imagenMiniatura.addEventListener("mouseover", mouseover);
  imagenMiniatura.addEventListener("mouseout", mouseout);
}
const registros = document.querySelectorAll(".Genero");
var filtrado = document.getElementById("filtro");
var formularioFiltrar = document.getElementById("formulario");
formularioFiltrar.onsubmit = function () {
  const seleccionFiltro = filtrado.options[filtrado.selectedIndex].text;
  for (let registroIndividual of registros) {
    if (registroIndividual.innerHTML === seleccionFiltro) {
    } else {
      registroIndividual.parentNode.style.display = "none";
    }
  }
};

var botonesEditar = document.querySelectorAll(".editar");
for (let boton of botonesEditar) {
  boton.addEventListener("click", editarLibro);
}

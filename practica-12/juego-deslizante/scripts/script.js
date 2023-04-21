function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}
function comenzarJuego() {
  Cronometro.style = "diplay: flex";
  aleatorizarFichas(fichasComoArreglo);
  juegoComenzado = true;
  tiempo = 0;
  reiniciarCronometro();
  comenzarCronometro();
}
function verificarFichas(fichasComoArreglo) {
  for (let i = 1; i < fichasComoArreglo.length - 1; i++) {
    if (fichasComoArreglo[i - 1].textContent !== i + "") {
      return false;
    }
  }
  mensajeGanar.style = "display:block";
  juegoComenzado = false;
  return true;
}
function aleatorizarFichas(fichas) {
  estadoInicial = [];
  for (let ficha of fichas) {
    estadoInicial.push(ficha.innerHTML);
  }
  shuffle(estadoInicial);
  for (let i = 0; i < fichas.length; i++) {
    fichas[i].textContent = estadoInicial[i];
  }
}
function moverFicha(e) {
  if (juegoComenzado) {
    const fichaActual = e.currentTarget;
    const posicionCero = parseInt(fichasComoArreglo.findIndex(esXValor, ""));
    const posicionActual = parseInt(
      fichasComoArreglo.findIndex(esXValor, fichaActual.textContent + "")
    );
    if (
      (posicionActual == posicionCero - 4 ||
        posicionActual == posicionCero + 4 ||
        posicionActual == posicionCero - 1 ||
        posicionActual == posicionCero + 1) &&
      posicionActual != 3 &&
      posicionActual != 7 &&
      posicionActual != 11 &&
      posicionActual != 15
    ) {
      interCambiarFichas(fichasComoArreglo, posicionActual, posicionCero);
    }
    verificarFichas(fichasComoArreglo);
  }
}
function esXValor(ficha) {
  return ficha.textContent == this;
}
function interCambiarFichas(fichas, indice1, indice2) {
  let temp = fichas[indice1].textContent;
  fichas[indice1].textContent = fichas[indice2].textContent;
  fichas[indice2].textContent = temp;
}
function comenzarCronometro() {
  if (juegoComenzado) {
    cronometroIntervalo = setInterval(function () {
      tiempo++;
      var horas = Math.floor(tiempo / 3600);
      var minutos = Math.floor((tiempo - horas * 3600) / 60);
      var segundos = tiempo - horas * 3600 - minutos * 60;
      Cronometro.textContent =
        pad(horas) + ":" + pad(minutos) + ":" + pad(segundos);
    }, 1000);
  }
}
function reiniciarCronometro() {
  tiempo = 0;
  Cronometro.textContent = "00:00:00";
  clearInterval(cronometroIntervalo);
}
function pad(num) {
  return ("0" + num).slice(-2);
}
function detenerJuego() {
  reiniciarCronometro();
  juegoComenzado = false;
}

var juegoComenzado = false;
var tiempo = 0;
var cronometroIntervalo;
var botonDeneter = document.getElementById("botonDetener");
var fichas = document.querySelectorAll(".piece");
var botonComenzar = document.getElementById("botonComenzar");
var fichasComoArreglo = Array.from(fichas);
var Cronometro = document.getElementById("Cronometro");
var mensajeGanar = document.getElementById("Ganaste");
botonComenzar.addEventListener("click", comenzarJuego);
for (let ficha of fichas) {
  ficha.addEventListener("click", moverFicha);
}
botonDeneter.addEventListener("click", detenerJuego);

import "bootstrap";
import "./style.css";

import "./assets/img/4geeks.ico";

// let titulo = `${""}`;
// document.title = titulo;

// titulo =
//   "document.querySelector("#paloTop")" +
//   "document.querySelector("#numero")" +
//   "document.querySelector("#paloBot")";

window.onload = function() {
  getcard();
};
document.querySelector("#newCard").addEventListener("click", () => {
  getcard();
  // reiniciarTemporizador();
});
document.querySelector("#carta").addEventListener("click", () => {
  getcard();
  // reiniciarTemporizador();
});

setInterval(getcard, 3000);

// function reiniciarTemporizador() {
//   clearInterval(setInterval); // Limpiar el intervalo actual
//   // Iniciar nuevamente el temporizador
// }

function valorRandom() {
  let numero = Math.ceil(Math.random() * 13);

  if (numero == 1) {
    numero = "A";
  } else if (numero == 11) {
    numero = "J";
  } else if (numero == 12) {
    numero = "Q";
  } else if (numero == 13) {
    numero = "K";
  }
  return numero;
}

function paloRandom() {
  return Math.ceil(Math.random() * 4);
}
function getcard() {
  document.querySelector("#numero").innerHTML = valorRandom();
  switch (paloRandom()) {
    case 1:
      document.querySelector("#carta").className = "";
      document.querySelector("#carta").classList.add("diamante");
      document.querySelector("#paloTop").innerHTML = "♦";
      document.querySelector("#paloBot").innerHTML = "♦";

      // titulo = "♦" + "#numero";
      break;
    case 2:
      document.querySelector("#carta").className = "";
      document.querySelector("#carta").classList.add("corazon");
      document.querySelector("#paloTop").innerHTML = "♥";
      document.querySelector("#paloBot").innerHTML = "♥";
      break;
    case 3:
      document.querySelector("#carta").className = "";
      document.querySelector("#carta").classList.add("pica");
      document.querySelector("#paloTop").innerHTML = "♠";
      document.querySelector("#paloBot").innerHTML = "♠";
      break;
    case 4:
      document.querySelector("#carta").className = "";
      document.querySelector("#carta").classList.add("trebol");
      document.querySelector("#paloTop").innerHTML = "♣";
      document.querySelector("#paloBot").innerHTML = "♣";
      break;
  }
}

/* eslint-disable */
console.log("wazaaaaa");
import "bootstrap";
import "./style.css";

import "./assets/img/4geeks.ico";
// import "https://trucosdemagia.net/wp-content/uploads/2018/10/tapetes-magia.jpg";

let titulo = "Magic trik"; // Definir la variable
document.title = titulo; // Asignar el valor de la variable al título de la pági

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
  getcard();
};

// //  ♦ ♥ ♠ ♣
// let paloArriba = document.querySelector("#simboloArriba");
//   let numero = document.querySelector("#numero");
//   let paloAbajo = document.querySelector("#simboloAbajo");
//
//
// function asignarPalo(arr) {
//     if (arr[0] === "corazon") {
//       paloArriba.innerHTML = "♥";
//       paloAbajo.innerHTML = "♥";

let boton = getcard();
getcard();

function numero() {
  return Math.ceil(Math.random() * 13);
}

function pinta() {
  return Math.ceil(Math.random() * 4);
}

function getcard() {
  document.querySelector("#numero").innerHTML = numero();
  switch (pinta()) {
    case 1:
      document.querySelector("#pinta1").innerHTML = "♦";
      document.querySelector("#pinta2").innerHTML = "♦";
      break;
    case 2:
      document.querySelector("#pinta1").innerHTML = "♥";
      document.querySelector("#pinta2").innerHTML = "♥";
      break;
    case 3:
      document.querySelector("#pinta1").innerHTML = "♠";
      document.querySelector("#pinta2").innerHTML = "♠";
      break;
    case 4:
      document.querySelector("#pinta1").innerHTML = "♣";
      document.querySelector("#pinta2").innerHTML = "♣";
      break;

    default:
      document.querySelector("#pinta1").innerHTML = "♣";
      document.querySelector("#pinta2").innerHTML = "♥";
      break;
  }
}

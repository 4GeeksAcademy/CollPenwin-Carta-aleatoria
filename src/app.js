/* eslint-disable */
console.log("wazaaaaa");
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
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

function getcard() {
  document.querySelector("#numero").innerHTML = numero();
  switch (pinta()) {
    case 1:
      document.querySelector("#pinta1").innerHTML =
        '<i class="fa-solid fa-heart"></i>';
      document.querySelector("#pinta2").innerHTML =
        '<i class="fa-solid fa-heart"></i>';
      break;
    case 2:
      document.querySelector("#pinta1").innerHTML =
        '<i class="fa-solid fa-diamond"></i>';
      document.querySelector("#pinta2").innerHTML =
        '<i class="fa-solid fa-diamond"></i>';
      break;
    case 3:
      document.querySelector("#pinta1").innerHTML =
        '<i class="fa-solid fa-clover"></i>';
      document.querySelector("#pinta2").innerHTML =
        '<i class="fa-solid fa-clover"></i>';
      break;
    case 4:
      document.querySelector("#pinta1").innerHTML =
        '<i class="fa-solid fa-rocket"></i>';
      document.querySelector("#pinta2").innerHTML =
        '<i class="fa-solid fa-rocket"></i>';
      break;

    default:
      document.querySelector("#pinta1").innerHTML =
        '<i class="<i class="fa-solid fa-wrench"></i>';
      document.querySelector("#pinta2").innerHTML =
        '<i class="<i class="fa-solid fa-rocket"></i>';
      break;
  }
}

function numero() {
  return Math.ceil(Math.random() * 13);
}

function pinta() {
  return Math.ceil(Math.random() * 4);
}

var operacionAnterior = "";
var operacionActual = "";
var calc = 0;
var calc2 = 0;
function pintar(tecla) {
  var pantalla = document.getElementById("screen");
  operacionActual = pantalla.innerText;
  
  if (tecla == 1) {
    operacionActual = 1;
  } else if (tecla == 2) {
    operacionActual = 2;
  } else if (tecla == 3) {
    operacionActual = 3;
  } else if (tecla == 4) {
    operacionActual = 4;
  } else if (tecla == 5) {
    operacionActual = 5;
  } else if (tecla == 6) {
    operacionActual = 6;
  } else if (tecla == 7) {
    operacionActual = 7;
  } else if (tecla == 8) {
    operacionActual = 8;
  } else if (tecla == 9) {
    operacionActual = 9;
  } else if (tecla == 0) {
    operacionActual = 0;
  } else if (tecla == ".") {
    operacionActual = ".";
  } else if (tecla == "+") {
    calc = parseFloat(operacionActual);
    borrar();
    calc2 = parseFloat(operacionActual) 
  }
  agregarnum();
  //   return operacionActual;
}

function agregarnum() {
  var pantalla = document.getElementById("screen");
  operacionAnterior = operacionAnterior.toString() + operacionActual.toString();
  pantalla.innerText = operacionAnterior;
}

function borrar() {
  var pantalla = document.getElementById("screen");
  operacionActual = "";
  operacionAnterior = "";
  pantalla.innerText = operacionActual;
}


function sumar(num1, num2) {
  total1 = parseFloat(num1) + parseFloat(num2);
  return total1;
}

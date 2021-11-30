var operacionActual = 0;
var calc = 0;
var calc2 = 0;

function displayScreen(num) {
  if (operacionActual == 0) {
    document.getElementById("screen").innerText = num;
    operacionActual = num;
  } else {
    operacionActual = operacionActual.toString() + num.toString();
    agregarnum();
  }
}

function agregarnum() {
  document.getElementById("screen").innerText = operacionActual;
}

function borrar() {
  operacionActual = 0;
  calc = 0;
  agregarnum();
}

function deletLastNum() {
  var pantalla = document.getElementById("screen");
  pantalla.innerText = pantalla.innerText.slice(0, -1);
  if (pantalla.innerText == "") {
    borrar();
  }
}

// funcion previa para pintar en la pantalla
// function pintar(tecla) {
//   var pantalla = document.getElementById("screen");
//   operacionActual = pantalla.innerText;

//   if (tecla == 1) {
//     operacionActual = 1;
//   } else if (tecla == 2) {
//     operacionActual = 2;
//   } else if (tecla == 3) {
//     operacionActual = 3;
//   } else if (tecla == 4) {
//     operacionActual = 4;
//   } else if (tecla == 5) {
//     operacionActual = 5;
//   } else if (tecla == 6) {
//     operacionActual = 6;
//   } else if (tecla == 7) {
//     operacionActual = 7;
//   } else if (tecla == 8) {
//     operacionActual = 8;
//   } else if (tecla == 9) {
//     operacionActual = 9;
//   } else if (tecla == 0) {
//     operacionActual = 0;
//   } else if (tecla == ".") {
//     operacionActual = ".";
//   } else if (tecla == "+") {
//     calc = parseFloat(operacionActual);
//     borrar();

//     calc2 = parseFloat(operacionActual)
//   }
//   agregarnum();
//   //   return operacionActual;
// }

function operar(num) {
  var num1 = parseFloat(operacionActual);
  if (calc == 0) {
    calc = num1;
    agregarnum();
  } else {
    switch (num) {
      case "+":
        calc = calc + num1;
        document.getElementById("screen").innerText = calc;
        break;
      case "-":
        calc = calc - num1;
        document.getElementById("screen").innerText = calc;
        break;
      case "/":
        calc = calc / num1;
        document.getElementById("screen").innerText = calc;
        break;
      case "*":
        calc = calc * num1;
        document.getElementById("screen").innerText = calc;
        break;
      default:
        break;
    }
  }
  operacionActual = 0;
  console.log(num1);

  // total1 = parseFloat(num1) + parseFloat(num2);
  // return total1;
}

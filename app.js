//en app vamos a requerir dicho modulo,porque lo vamos a usar(osea calculadora)

let calculadora = require("./calculadora"); //va a recibir el modulo calculadora. lo que va entre parentesis es la ruta del archivo donde  va a tomar la informacion que necesito o el modulo.

let process = require('process'); //requiero process porque quiero trabajar con el proceso interno de node

let operacion = process.argv[2];//con el numero de posicion que le pongo me devuelve por consola la variable que le asigno.

let numero1 = Number(process.argv[3]); //los numeros que yo le pongo en consola me los toma como un indice de array

let numero2 = Number(process.argv[4]);

switch (operacion) {
    case "sumar":
        console.log(calculadora.sumar(numero1,numero2));
        break;

    case "restar":
        console.log(calculadora.restar(numero1,numero2));
        break;

    case "multiplicar":
            console.log(calculadora.multiplicar(numero1,numero2));
            break;

    case "dividir":
            console.log(calculadora.dividir(numero1,numero2));
            break;

    default:
        break;
}
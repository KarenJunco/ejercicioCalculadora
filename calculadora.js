
let calculadora = {
    sumar : (a,b) => a + b,
    restar : (a,b) => a - b,
    multiplicar : (a,b) => a * b,
    dividir : (a,b) => a / b
}

module.exports = calculadora // exporta como modulo el objeto literal de arriba. se convierte el objeto literal en un modulo. el modulo es el objeto literal junto con todos sus metodos
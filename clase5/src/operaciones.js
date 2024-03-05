//declaro mis funciones

const suma = (a,b) => a + b;
const resta = (a,b) => a - b;
const multi = (a,b) => a * b;
const division = (a,b) => a / b;

//dos formas de importar y exportar modulos
//antigua Common JS
//la nueva ES Module

//exporto todas las funciones
module.exports ={
    suma,
    resta,
    multi,
    division
}


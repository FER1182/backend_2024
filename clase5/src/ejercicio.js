/**calculadora de edad **/
const momento = require("moment")

const fechaActual = moment();

const fechaNacimiento = moment("1987-03-10")

if(fechaNacimiento.isValid()){
    let diasPasados= fechaActual.diff(fechaNacimiento,"days");
    console.log(`pasaron desde que naci hasta hoy: ${diasPasados}` );
}else{
    console.log("la fecha no es valida")
}

//cambiando la version a una mas vieja el isValid no funciona
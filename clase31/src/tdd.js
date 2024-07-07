// en tdd se divide el trabajo en 3 etapas

const { text } = require("express");

//1 escribir la prueba fallida
//2 hacer que la prueba pase
//3 refactorizar , rehacer el codigo


// const suma = (numeroA, numeroB) => {
//       //test2:
//       if (!numeroA || !numeroB) {
//         return 0;
//     }
//     //test1:
//     if (typeof numeroA !== "number" || typeof numeroB !== "number") {
//         return null;
//     }
  
//     //test3:
//     return numeroA + numeroB;

//     //test4:

    
// }

//para resolver el test 4 modificamos toda la funcion para recibir cualquier cantidad de argumentos

// const suma = (...numeros) => {
//     //test2:
//     if (numeros.length === 0) {
//         return 0;
//     }
//     //test1:
//         let esNumerico = true;
//         for (let i = 0; i < numeros.length && esNumerico; i++) {
//             if (typeof numeros[i] !== "number") {
//                 esNumerico = false;
//             }
//             if (esNumerico !== true) {
//                 return null;
//             }
//         }
        
//      //test3 y 4:


//     let total = 0;
//     for (let i = 0; i < numeros.length; i++) {
//         total += numeros[i];
//     }
//     return total;
// }   
/////////*************PASO 3********** */
//paso 3 refactorizar , buscamos sintetizar y hacer mas legible nuestro codico

const suma=(...numeros)=>{
    if(numeros.length===0) return 0;
    if(!numeros.every(num=>typeof num==="number")) return null;
    return numeros.reduce((total, num)=>total+num,0);
}




//imaginamos escenarios de prueba 
//1 la funcion retorna null si algun parametro no es numerico
//2 la funcon deber retornar cero sino pasa ningun parametro
//3 la funcion deber hacer la suma correctamente
//4 la funcio deber poder realizar la suma con cualquier cantidad de elementos

let testPasados = 0;
let tesTotales = 4;

//test1
console.log("1 la funcion retorna null si algun parametro no es numerico")
let resultado1 = suma("a", 2);
if (resultado1 === null) {
    console.log("test1: ok");
    testPasados++;
} else {
    console.log("test1: error , el resultado es : " + resultado1);
}   

console.log("---------------------------------------------------------")

//test2
console.log("2 la funcon deber retornar cero sino pasa ningun parametro")
let resultado2 = suma();
if (resultado2 === 0) {
    console.log("test2: ok");
    testPasados++;
} else {
    console.log("test2: error, el resultado es : " + resultado2);
}

console.log("---------------------------------------------------------")

//test3
console.log("3 la funcion deber hacer la suma correctamente")
let resultado3 = suma(1, 2);
if (resultado3 === 3) {
    console.log("test3: ok");
    testPasados++;
} else {
    console.log("test3: error, el resultado es : " + resultado3);
}

console.log("---------------------------------------------------------")

//test4
console.log("4 la funcio deber poder realizar la suma con cualquier cantidad de elementos")
let resultado4 = suma(1, 2, 3, 4, 5);
if (resultado4 === 15) {
    console.log("test4: ok");
    testPasados++;
} else {
    console.log("test4: error,  el resultado es : " + resultado4);
}

console.log("---------------------------------------------------------")

if(testPasados === tesTotales){
    console.log("todos los tests pasaron");
}else{
    console.log("faltan tests " +testPasados + " de " + tesTotales);
}   


//node src/app.js

//vamos a hacer que la pruebas pasen


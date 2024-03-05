// npm init --yes ..te crea e package json
//npmjs.como ahi podes buscar paquetes siempre verificar q tenga muchas descargas para
// verificar q sea el correcto


//modulo

/**modulos escritos por nosotros.**/

const operaciones = require("./operaciones.js")
//"require" es una funcion que permite cargar o requerir algun modulo particular

console.log(operaciones.suma(5,5))

console.log(operaciones.resta(10,5))
//lo ejecuto    con node src/app.js

/**modulos nativos son los que vienen incluidos en node js y 
  no es necesario instalarlos solo importarlos cuando lo vamos a usar*
 */

  //1_FyleSystem
  //2_HTTP: es un modulo q genera un servidor..pero solo lo vemos muy poco pq se sua express
  //3 Crypto  encripta datos
  //4  Path: trabaja con rutas de archivos directorios
  //5 Timers: setTimeout,SetInterval
  //6 console: para mostrar info por consola
  // estas las podemos buscar en nodejs.org 


  //**MODULOS DE TERCEROS   estos no vienen incluidos y tenemos q instalarlos****/
//se instalan con NPM ...las bucamos en npmjs.com
//por ejemplo moments

//1- instalamos desde la terminal con npm install y el nombre del modulo
// npm install moment
//npm i express

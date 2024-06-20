//nos permite configurar nuestros argumentos de consola
//npm i commander
import { Command } from "commander";


const program = new Command()


// tres argunmetno 1-comando 2-descripcion 3 - valor por default

program
    .option("-p <port>","puerto en donde se inicia el servidor",8080)
    .option("--mode <mode>","modo de trabajo","produccion")
program.parse();    

console.log("opciones",program.opts());
//node src/utils/commander.js con este comando me aparece lo q le pase

export default program
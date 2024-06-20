//listeners

//process.on().. registra escuchadores de eventos para los eventos que ocurran en el proceso

//eventos mas utilizados

//on "exit"  para ejecutar un codigo justo antes de la finalizacion del process

process.on("exit",()=>{
    console.log("este codigo se ejecuta siempres antes de terminar el proceso")
})


console.log("texto adicional")
//node src/process.js



//excepciones no encontradas : 
process.on("uncaughtException",()=>{
    console.log("tuvimos que capturar un error")
})

//por ejemplo llamo una funcion que no existe
//firulais()
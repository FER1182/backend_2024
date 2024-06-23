//listeners

//process.on().. registra escuchadores de eventos para los eventos que ocurran en el proceso

//eventos mas utilizados

//on "exit"  para ejecutar un codigo justo antes de la finalizacion del process

process.on("exit",(code)=>{
    console.log("este codigo se ejecuta siempres antes de terminar el proceso, codigo de salida", code)
})


console.log("texto adicional")
//node src/process.js



//excepciones no encontradas : 
process.on("uncaughtException",(error)=>{
    console.log("tuvimos que capturar un error ", error),
    process.exitCode = 1
})

//por ejemplo llamo una funcion que no existe
firulais()
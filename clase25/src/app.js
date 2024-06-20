//objeto process cada vez que ejecuto la consola se crea el objeto process
//console.log(process)

//si quiero saber el directorio donde se ejecuta la raiz de la aplicacions
console.log(process.cwd())

//obtener el id del process
console.log(process.pid)

//memoria que usa el proceso
console.log(process.memoryUsage())

//que version de node estamos usando
console.log(process.version)

//para finalizar un proceso

//process.exit()
//console.log("texto adicional")//lo que esta despues del exit nunca se muestra

// node src/app.js tinkiwinki en el argv va a aparecer tambien tinkiwinki
console.log(process.argv)

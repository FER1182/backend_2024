//npm init --yes
//npm i nodemon -D para instalar nodemon como desarollador

//el cliente del servidor es el navegadro por ejemplo
//se trabaja bajo protocolo http q es un conjunto de reglas para 
//regular la comunicacion cliente - servidor
//un servidor responde a multiples clientes al mismo tiempo
//cliente hace peticiones = request
//el servidor siempre da respuestes = responses
// vamos a hacer el servidor no olvidar de insalar nodemon

//importamos el modulo
const http = require("http")

//creamos el servidor web
/*
const server = http.createServer((request,response)=>{
    console.log("se realizo una petincion al servidor")
    response.end("mi primer hola mundo desde backend")
})

//nos ponemos a escuchar a nuestro servidor en un puerto especial de la compu

const PUERTO = 8080;

server.listen(PUERTO,()=>{
    console.log(`escuchando en el http://localhost:${PUERTO}`)
})

//ponemos en terminal npm run dev
ESTA FORMA DE HACER SERVIDOR NO LA VAMOS A USAR..USAMOS OTRA

*/
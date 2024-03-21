
//la comunciacion se hace entre 2 end point y cada endpoint recien el nombre de socket

//1 primero el cliente llama al servidor ..hace una peticion a http al servidor conocido como handshake 
import express from "express";
import exphbs from "express-handlebars";
const app = express();
const PUERTO = 8080

import viewsRouter from "./routes/views.router.js"

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static("./src/public"))

app.engine("handlebars",exphbs.engine());
app.set("view engine","handlebars");
app.set("views","./src/views")



//rutas
app.use("/", viewsRouter);

// app.listen(PUERTO,()=>{
//     console.log(`escucando en puerto PUERTO`)
// })

//Listen
const httpServer = app.listen(PUERTO, () => {
    console.log(`Esuchando en el puerto: ${PUERTO}`);
})
//Pasos para trabajar con socket.io
//1) Instalamos con npm: npm install socket.io
//2) Importamos el módulo: 
import { Server } from "socket.io";
//const socket = require("socket.io"); 
//3) Nos guardamos una referencia de nuestro servidor de express. 
//ejemplo httpServer (que tenemos lineas arriba )
//Armamos un array de usuarios: 
const usuarios = [
    {id: 1, nombre: "Lionel", apellido: "Scaloni"}, 
    {id: 2, nombre: "Lionel", apellido: "Messi"}, 
    {id: 3, nombre: "Pepe", apellido: "Argento"}, 
    {id: 4, nombre: "Moni", apellido: "Argento"}, 
    {id: 5, nombre: "Coky", apellido: "Argento"}, 
    {id: 6, nombre: "Paola", apellido: "Argento"}, 
]
const io = new Server(httpServer);
//Instancia de Socket.io del lado del servidor.


io.on("connection",(socket)=>{
    console.log("un cliente se conecto")

    socket.on("mensaje",(data)=>{
        console.log(data)
    })

    socket.emit("saludito","hola cliente comoestas_?")
    socket.emit("usuarios",usuarios)

})
// vamos a usar glitch para hacer aplicaciones
//se hace un chat..3
// instalamos npm i socket.io express-handlebars

const express = require("express");
const app = express();
const socket = require("socket.io")
const PUERTO = 8080;
const exphbs =require("express-handlebars")

app.use(express.static("./src/public"));

app.use(express.json());
app.use(express.urlencoded({extended:true}));

//configuramos handlebars
app.engine("handlebars",exphbs.engine());
app.set("view engine","handlebars");
app.set("views","./src/views")


app.get("/",(req,res)=>{
    res.render("index")
})
//https://sweetalert2.github.io/ mejora el alert


const httpServer = app.listen(PUERTO,()=>{
    console.log(`escuchando en el puerto:${PUERTO}`);
})

//me guardo una referencia del servidor
//genero instancia del socket del lado del backend

const io = new socket.Server(httpServer);


//por ahora lo vamos a guardar en la memoria del servidor
let messages =[];
//ahora generamos desde el lado del front
//establecemos la conexion
//on es para escuchar eventos
//emit para emitir

io.on("connection",()=>{
    console.log("nuevo usuario conectado");

    io.on("message", data =>{
        console.log(data);
        messages.push(data)
        io.emit("messagesLogs",messages);
    })

})

//pegamos en index.handlebar los cdn de socket y sweet alert
//y lo del cliente los hacemos en main.js en src js







/* si me olvide y no puse gitignore
git rm -r --cached . 
git add .
git commit -m "mensaje"
git push*/

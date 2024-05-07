import express from "express"
import usuariosRouter from "./routes/usuarios.router.js"
const app= express();
const PUERTO = 8080;


//MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({extended:true}));


//rutas
app.use("/",usuariosRouter)


//listen

app.listen(PUERTO,()=>{
    console.log(`escuchando en el puerto ${PUERTO}`);
})


//conexion a mongo atlas a traves mongosee

import mongoose from "mongoose";
mongoose.connect("mongodb+srv://fernandorudnevichinedita:231182@cluster0.xe7glky.mongodb.net/Tienda?retryWrites=true&w=majority&appName=Cluster0")
    .then(()=> console.log("conectados a la base de datos"))
    .catch((error)=> console.log("tenemos un error ",error)) 
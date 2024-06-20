// //objeto process cada vez que ejecuto la consola se crea el objeto process
// //console.log(process)

// //si quiero saber el directorio donde se ejecuta la raiz de la aplicacions
// console.log(process.cwd())

// //obtener el id del process
// console.log(process.pid)

// //memoria que usa el proceso
// console.log(process.memoryUsage())

// //que version de node estamos usando
// console.log(process.version)

// //para finalizar un proceso

// //process.exit()
// //console.log("texto adicional")//lo que esta despues del exit nunca se muestra

// // node src/app.js tinkiwinki en el argv va a aparecer tambien tinkiwinki
// console.log(process.argv)
import express from "express"
import UserModel from "./models/usuarios.model.js";
const app = express();
import mongoose from "mongoose";
import configObjet from "./config/config.js";
const {mongo_url,puerto}=configObjet


app.get("/",async(req,res)=>{
    try {
        const usuarios = await UserModel.find()
        res.send(usuarios)


    } catch (error) {
        res.status(500).send("error del servidor")
    }
})

app.listen(puerto)

//nos conectamos con mongdodb

mongoose.connect(mongo_url)
    .then (()=>console.log("conectado a la bd"))
    .catch(()=> console.log("error coneccion a db"))

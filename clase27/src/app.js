//clase27

import express from "express"
const app = express()
const PORT=8080;
import ("./database.js")
import productosRouter from "./routes/productos.router.js"
import cors from "cors"

//midelware
app.use(express.json())
app.use(express.urlencoded({extended:true}));
app.use(express.static("./src/public"));
app.use(cors())//se instala con npm i cors y sirve para conectar cuando entra desde el cliente

//rutas
app.use("/productos",productosRouter)


app.listen(PORT,()=>{
    console.log("escuchando en el puerto")
})
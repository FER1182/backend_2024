//clase 26 arquitectura por capas


import express from "express"
import jugueteRouter from "./routes/juguete.router.js"

import "./database.js"

const app = express()
const PUERTO = 8080;


//middleware

app.use(express.json())
app.use(express.urlencoded({extended:true}))

//rutas
app.use("/juguetes",jugueteRouter)

app.listen(PUERTO,()=>{
    console.log(`escuchando en el puerto ${PUERTO}`)
})


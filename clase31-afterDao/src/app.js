import express from "express";
const app = express();
const PORT = 8080
import "./database.js";
import jugueteRouter from "./routes/juguetes.router.js";

//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

//Rutas
app.use('/juguetes',jugueteRouter)



app.listen(PORT, () => {    
    console.log(`Servidor escuchando en el puerto ${PORT}`)
})
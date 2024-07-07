//un mock es una simulacion que generamos en el entorno de desarrollo para no manipular datos realea y para tener herramientas de trabajo de forma rapida

import express from "express";

const app = express();

const PORT = 8080;

import usuariosRouter from "./routes/usuarios.router.js";
app.use(express.json());
app.use("/api/usuarios", usuariosRouter);   

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);    
}); 
//faker sirve para hacer los moks npm i @faker-js/faker
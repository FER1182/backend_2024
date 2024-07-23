//******* ******/

//1loggers
//winston
//artillery


//loggers es una herramienta que registra informacion sobre el funcionamiento de la app
//npm i winston

import express from "express";
const app = express();
const PORT = 8080;

//routers
app.get("/", (req, res) => {
    res.send("Hola mundo");
})


app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
})  
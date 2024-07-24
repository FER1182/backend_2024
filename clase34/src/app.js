//******* ******/

//1loggers
//winston
//artillery


//loggers es una herramienta que registra informacion sobre el funcionamiento de la app
//npm i winston

import express from "express";
const app = express();
const PORT = 8080;
import addLogger from "./utils/logger.js";

//middlewares
app.use(addLogger);

//ruta para testar winston

app.get("/loggertest", (req, res) => {

    req.logger.http("mensaje http");
    req.logger.info("mensaje info");
    req.logger.warn("mensaje warn");
    req.logger.error("mensaje error");

    res.send("logs generados");
})

//routers
app.get("/", (req, res) => {
    res.send("Hola mundo");
})


app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
})  
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

//simulamos algunas peticiones para artillery
//OPERACION SIMPLE
app.get("/operacionSimple", (req, res) => {
    let suma = 0;

    for (let i = 0; i < 1000000; i++) {
        suma += i;
    }

    res.send(`la suma es ${suma}`);
})

//OEPRACION COMPLEJA

app.get("/operacionCompleja", (req, res) => {

    let suma = 0;
    for (let i = 0; i < 5e8; i++) {
        suma += i;
    }

    res.send(`la suma es ${suma}`);
        
})


app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
})  


//artillery 
//npm i artillery
//artillery quick --count 40 --num 50 "http://localhost:8080/operacionsimple" -o simple.json

//artillery quick --count 40 --num 50 "http://localhost:8080/operacioncompleja" -o compleja.json
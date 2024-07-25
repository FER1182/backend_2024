import express from "express";

const app = express();
const PUERTO = 8080;

app.get("/", (req, res) => {
    res.send("Hola mundo estoy trabajando en docker");
}); 

app.listen(PUERTO, () => {
    console.log(`Servidor escuchando en el puerto ${PUERTO}`);
});

//comando para ejecutar el docker 
//docker build -t clase35b .
//crear contenedores apartir de la imagen
//docker run -p 8081:8080 firulais con esto genero un contendor en el puerto 8081

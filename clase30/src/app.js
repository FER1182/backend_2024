import express from "express";

const app = express();
const PUERTO = 8080;


//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("./src/public"));


//routes
app.get("/", (req, res) => {
    res.send("Hello World");
})

//database  
///**************      CONTRASEÑA DE APLIACIONES DE GOOGLE ` */
//contraseña de aplicaciones de google fer.232 aplicacion CoderHouse_backend2024
//svmu xukg cvzz kzzb

//npm i nodemailer
    

app.listen(PUERTO, () => {
    console.log("Server running on port ",PUERTO);
});

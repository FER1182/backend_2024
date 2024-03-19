/*
Motores de plantillas:
EJS > https://ejs.co/
pug> https://pugjs.org/api/getting-started.html
handlebars> https://pugjs.org/api/getting-started.html

https://www.npmjs.com/package/express-handlebars 
se usa esta pq handelbars esta desactualizada
la principal es main .handelbars


*/

//organizamos nuestra app
const express = require("express");

const app= express();
const PUERTO = 8080;
const viewsRouter = require("./routes/view.router.js")

//middleware
app.use(express.static("./src/public"))// de esta forma esta conectado la hoja de estilo 
//a main.handlebars






//me traigo el modulo
const exphbs = require("express-handlebars")
//configuramos el motor de plantilla
app.engine("handlebars",exphbs.engine());
app.set("view engine","handlebars")
app.set("views","./src/views")


app.use(("/" ,viewsRouter));
app.listen(PUERTO,()=>{
    console.log(`escuchando en el puerto ${PUERTO}`)
})

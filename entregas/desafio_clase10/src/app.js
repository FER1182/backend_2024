

import express from "express";
import exphbs from "express-handlebars";
import viewsRouter from "./routes/views.router.js"
//Rutas 
import productsRouter from "./routes/products.router.js"
import cartsRouter from "./routes/carts.router.js"

//import socket from "socket.io"


const app = express();
const PUERTO = 8080;


app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static("./src/public"));

//configuracion handlebars
app.engine("handlebars",exphbs.engine());
app.set("view engine","handlebars");
app.set("views", "./src/views");

app.use("/api/",productsRouter);
app.use("/api/",cartsRouter)
app.use("/",viewsRouter);

app.listen(PUERTO,()=>{
    console.log(`escuchando en el puerto ${PUERTO}`);
})



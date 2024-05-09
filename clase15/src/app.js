import express from "express"
import imagenRouter from "./routes/imagen.router.js"
const app = express()
const PUERTO = 8080;
import "./database.js"
import exphbs from "express-handlebars"
import multer from "multer";

//middleware

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static("./src/public"))
//configuramos multer
const storage = multer.diskStorage({
    destination: (req,file,cb)=>{
        cb(null, "./src/public/img");
    },
    filename: (req,file,cb)=>{
        cb(null,file.originalname);
    }
})
app.use(multer({storage}).single("image"))

//express handlebars

app.engine("handlebars",exphbs.engine());
app.set("view engine","handlebars");
app.set("views", "./src/views");


//rutas

app.use("/", imagenRouter)
//inicializamos el servido
app.listen(PUERTO, ()=>{
    console.log(`escuchando en el puerto ${PUERTO}`);
})
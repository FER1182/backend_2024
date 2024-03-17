import  express  from "express";


//expres router separa las rutas en distintos modulos
const app = express();
const PORT = 8080;
//vinculamos las rutas
import userRouter from "./routes/users.router.js";
import petsRouter from "./routes/pets.router.js"



//le informamos al servidor q trabajamos con json y datos complejos
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/",userRouter);
app.use("/",petsRouter);


app.listen(PORT,()=>{
    console.log(`estamos escuchando en el puerto ${PORT}`)
})


//convierto la carpeta public en static y con eso hago que al ingresa al localhost:8080 muestre
//el index.html
//app.use(express.static("public"));

//prefijo virtual.. si queremos q la carpeta public se llame desde otro lugar
//que no sea el 8080 directo lo cambiamos, y comentamos el apps static de arriba
//de esta manera entonces cuando coloque el localhost:8080 ya no muestra el index

app.use("/firulais", express.static("public"));

//instalamos multer que es un midelware de terceros
//npm i multer
//despues de instalarlo hay que importarlo
import multer from "multer"
//con comon js const multer = require("multer")
// hay que generar una constante "upload" que almacena la configuracion de multer
//despues creamos una ruta para cargar los archivos

//para que cargue la imagen como jpg
const storage=multer.diskStorage({   
    destination:(req,file,cb)=>{
        cb(null,"./public/img");
        //carpeta donde guarda las imagenes
    },
    filename: (req,file,cb)=>{
        cb(null,file.originalname);
        //mantengo el nombre original
    }
})

//const upload = multer({dest:"./public/img"})
const upload = multer({storage})


app.post("/upload",upload.single("imagen"),(req,res)=>{
    res.send("imagen cargada")
})

//en postman en el body form-data donde va la key tiene que ser igual al que puse entre comillas
//en el upload.single y elijo archivo
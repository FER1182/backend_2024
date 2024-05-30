import cookieParser from "cookie-parser";
import express from "express"
import session from "express-session";
import FileStore from "session-file-store"
import MongoStore from "connect-mongo";
const app = express()
const PUERTO = 8080;
const fileStore = new FileStore(session)

//middlewere

app.use(express.json())
app.use(cookieParser())
app.use(session({
    //utilizando memoristorage
    secret : "secretCoder",
    resave : true ,
    saveUninitialized: true,
    //utilizando filestorage
    //store : new fileStore({path:"./src/sessions",ttl:100,retries:1}),

    //utilizamos mongo storage 
    store: MongoStore.create({
        mongoUrl: "mongodb+srv://fernandorudnevichinedita:231182@cluster0.xe7glky.mongodb.net/E-commerce?retryWrites=true&w=majority&appName=Cluster0",ttl:100
    })

}))
//rutas

app.get("/crearcuki",(req,res)=>{
    res.cookie("cuki","esto es una cookie").send("cookie seteada")
   
})

app.get("/borrarcuki",(req,res)=>{
    res.clearCookie("cuki").send("cookie borrada")
})
//login de usuario con sesion

app.get("/login",(req,res)=>{
    let usuario = req.query.usuario
    req.session.usuario = usuario
    res.send("guardamos el usuario por pedido de query")


})

//verificamos el usuario

app.get("/usuario",(req,res)=>{
    if(req.session.usuario){
        return res.send(`el usuario registrado es el siguiente ${req.session.usuario}`)
    }
    res.send("no tenemos un usuario registrado")

})




app.listen(PUERTO,()=>{
    console.log(`escuchando en el puerto ${PUERTO}`)
})
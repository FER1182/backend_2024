//expresiones regulares validar si el texto ingresado por el usuario corresponde a un mail
// email:nombre@dominio.com

//ejemplo con un correo electronico
let correoIngresado = "lionel@mesi.com"
let correoFalso = "tinkiwinik"

const patronCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

console.log(patronCorreo.test(correoIngresado));

console.log(patronCorreo.test(correoFalso));


//ejemplo con un numero de tel.

const patronTelefono = /\(\d{3}\) \d{3}-\d{4}/;

let telefonoIngresado ="(223) 663-1111 "

let telefonoFalso ="1234 "

console.log("verificamos un tel :" + patronTelefono.test(telefonoFalso));

import express from "express"
const app = express()
const PURETO = 8080;
import clientesRouter from "./routes/clientes.router.js"

//middleware

app.use(express.json());
app.use(express.urlencoded({extended:true}))


//rutas
app.use("/clientes",clientesRouter)

app.listen(PURETO,()=>{
    console.log(`escuchando en el puerto ${PURETO}`);
})

// app.get("*",(req,res)=>{
//     res.status(404).send("recurso no encontrado")
// })

//nos conectamos con el router q hicimos usamos el midelware

import UserRouter from "./routes/user.router.js";

const userRouter = new UserRouter();
app.use("/users",userRouter.getRouter());
import express from "express"
import jwt from "jsonwebtoken"
import cookieParser from "cookie-parser"
import initializePassport from "./config/passport.config.js"
import passport from "passport"
import { aturization, passportCall } from "./utils/utils.js"

const app= express()
const PUERTO = 8080


//midelware

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(express.static("./src/public"));
app.use(cookieParser())
app.use(passport.initialize());
initializePassport();


//rutas
app.post("/login",(req,res)=>{
    let {usuario,pass}=req.body

    if(usuario==="tinki" && pass === "winki"){
        //creo el token
    //let token = jwt.sign({usuario,pass},"coderhouse",{expiresIn: "24h"})
    //res.send({message :"login exitoso",token});
       //****envio tooken desde cookie */ 
        // res.cookie("coderCookieToken",token,{
        //     maxAge: 60*60*60*1000,
        //     httpOnly: true,//solo se accede desde una http
        // }).send({message :"login exitos"})

        ///////////////////////////////////////////////////
        /// modificacion para utilizar el midelware autorization que mira usuario premium
        let token = jwt.sign({usuario,pass,role:"user"},"coderhouse",{expiresIn: "24h"})
        //jarkodeo el role arriba
        res.cookie("coderCookieToken",token,{
            maxAge: 60*60*60*1000,
            httpOnly: true,//solo se accede desde una http
        }).send({message :"login exitos"})


    }else{
        res.send({message :"login fallido"});
    }
})

//creamos la ruta current
// app.get("/current",passport.authenticate("jwt",{session:false}),(req,res)=>{
//     res.send(req.user)
// })

//hacemos de nuevo  la ruta current con manejo de mensajes por call

app.get("/current",passportCall("jwt"),aturization("admin"),(req,res)=>{
     res.send(req.user)
})

app.listen(PUERTO,()=>{
    console.log("escuchando en el puerto 8080")
})
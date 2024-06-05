import express from "express"
import jwt from "jsonwebtoken"
import cookieParser from "cookie-parser"
import initializePassport from "./config/passport.config.js"
import passport from "passport"
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
    let token = jwt.sign({usuario,pass},"coderhouse",{expiresIn: "24h"})
    //res.send({message :"login exitoso",token});
       //****envio tooken desde cookie */ 
        res.cookie("coderCookieToken",token,{
            maxAge: 60*60*60*1000,
            httpOnly: true,//solo se accede desde una http
        }).send({message :"login exitos"})

    }else{
        res.send({message :"login fallido"});
    }
})

app.get("/current",passport.authenticate("jwt",{session:false}),(req,res)=>{
    res.send(req.user)
})



app.listen(PUERTO,()=>{
    console.log("escuchando en el puerto 8080")
})
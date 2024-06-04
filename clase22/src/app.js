import express from "express"
import jwt from "jsonwebtoken"
const app= express()
const PUERTO = 8080


//midelware

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(express.static("./src/public"));

//rutas
app.post("/login",(req,res)=>{
    let {usuario,pass}=req.body

    if(usuario==="tinki" && pass === "winki"){
        //creo el token
    let token = jwt.sign({usuario,pass},"coderhouse",{expiresIn: "24h"})
    res.send({message :"login exitoso",token});
    }else{
        res.send({message :"login fallido"});
    }
})



app.listen(PUERTO,()=>{
    console.log("escuchando en el puerto 8080")
})
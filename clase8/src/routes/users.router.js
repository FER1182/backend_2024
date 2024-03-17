import express from "express";
const router = express.Router()

const users = [];



//ruta usuarios

router.get("/api/users",(req,res)=>{
    res.send(users);
})

router.post("/api/users",(req,res)=>{
    const nuevoUsuario = req.body;
    users.push(nuevoUsuario);
    res.send({message:"usuario creado correctamente"})
})

export default router;
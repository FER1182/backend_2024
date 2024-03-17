
//const express = requiere("express")
import express from "express";
const router = express.Router();

const pets = [];

//rutas mascotas

router.get("/api/pets",(req,res)=>{
    res.send(pets);
})

router.post("/api/pets",(req,res)=>{
    const nuevaMascota = req.body;
    pets.push(nuevaMascota);
    res.send({message:"mascota creada correctamente"})
})

//exportamos el router de mascotas

export default router;
//common js 
//module.exports = router

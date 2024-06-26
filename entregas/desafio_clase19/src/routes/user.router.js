import express from "express"

const router = express.Router()

import UsuarioModel from "../models/usuario.model.js"
import { createHash } from "../utils/hashbcrypt.js"

//ruta Post para generar un usuario y almacenarlo en mongodb

router.post("/", async(req,res)=>{
    const {first_name, last_name , email , password , age} = req.body
    console.log("estoy aca")
    try {
        
        //verificar si el correo esta registrado
        const existeUsuario = await UsuarioModel.findOne({email:email});
        if(existeUsuario){
            return res.status(400).send("el correo ya esta registrado")
        }
        
        //definimos el rol del usuario

        const role = email === "admincoder@coder.com" ? "admin" : "usuario";
        //creacion de nuevo usuario
        const nuevoUsuario = await UsuarioModel.create({
            first_name,
            last_name,
            email,
            password: createHash(password),
            age,
            role
        })
       
        //una vez creado el usuario , creo la sesion
        req.session.user = {
            email : nuevoUsuario.email,
            first_name : nuevoUsuario.first_name,
            last_name: nuevoUsuario.last_name
        };
        req.session.login = true;
        res.redirect("/api/products")

    } catch (error) {
        res.status(500).send("error al crear un usuario")
    }


})


export default router
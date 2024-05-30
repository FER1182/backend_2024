import express from "express"

const router = express.Router()

import UsuarioModel from "../models/usuario.model.js"

//ruta Post para generar un usuario y almacenarlo en mongodb

router.post("/", async(req,res)=>{
    const {first_name, last_name , email , password , age} = req.body

    try {
        //verificar si el correo esta registrado
        const existeUsuario = await UsuarioModel.findOne({email:email});
        if(existeUsuario){
            return res.status(400).send("el correo ya esta registrado")
        }
        //creacion de nuevo usuario
        const nuevoUsuario = await UsuarioModel.create({
            first_name,
            last_name,
            email,
            password,
            age
        })

        //una vez creado el usuario , creo la sesion
        req.session.user = {
            email : nuevoUsuario.email,
            first_name : nuevoUsuario.first_name
        };
        req.session.login = true

    } catch (error) {
        
    }


})

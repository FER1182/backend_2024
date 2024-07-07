import express from "express";
import { generarUsuarios } from "../utils/utils.js";
const router = express.Router();


router.get("/", (req, res) => {
    //generamos un array de usuarios
    const usuarios = [];
    for (let i = 0; i < 5; i++) {
        usuarios.push(generarUsuarios());
    }
    res.send(usuarios);
});
    
export default router;
import  express  from "express";
const router = express.Router();

//importar el modelo
import UsuariosModel from "../models/usuarios.model.js";

//obtener listado de todos los usuario

router.get("/",async (req,res)=>{
    
    try {
        const usuarios = await UsuariosModel.find()
        res.json(usuarios)
    } catch (error) {
        res.status(500).json("error en el servidor")
    }
})

//subimos un nuevo usuario por postman
router.post("/", async (req,res)=>{
    const usuarioNuevo = req.body;
    
    try {
        const usuario = new UsuariosModel(usuarioNuevo);
        await usuario.save();    
        res.send({message: "usuario creado exitosamente", usuario: usuario})    

    } catch (error) {
        res.status(500).json("error interno del servidor aca")
    }
})

//actualizar usuario por id
router.put("/:id", async(req,res)=>{
    const idBuscado = req.params.id
    const datosNuevos = req.body
    try {
        const usuario = await UsuariosModel.findByIdAndUpdate(idBuscado,datosNuevos)
        res.status(200).send({message:"usuario actualizado",usuario: usuario})

    } catch (error) {
        res.status(500).json("error interno del servidor aca")
    }
})

//eliminar usuario por id
router.delete("/:id", async(req,res)=>{
    const idBuscado = req.params.id
    
    try {
        const usuario = await UsuariosModel.findByIdAndDelete(idBuscado)
        if(!usuario){
            return res.status(404).send("Usuario no encontrado")
        }
        res.status(200).send({message:"usuario eliminado",usuario: usuario})

    } catch (error) {
        res.status(500).json("error interno del servidor aca")
    }
})




export default router
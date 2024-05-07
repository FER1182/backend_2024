import mongoose from "mongoose";

const usuariosSchema = new mongoose.Schema({
    nombre: String,
    apellido: String,
    edad: Number
})


//definir el modelo

const UsuariosModel = mongoose.model("usuarios", usuariosSchema);

export default UsuariosModel;
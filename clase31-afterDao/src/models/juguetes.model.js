import mongoose from "mongoose";

const juguetesSchema = new mongoose.Schema({
    nombre: String,
    categoria: String,
    precio: Number
})

const JuguetesModel = mongoose.model('Juguetes',juguetesSchema)

export default JuguetesModel
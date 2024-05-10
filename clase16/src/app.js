import mongoose from "mongoose";
import UserModel from "./models/usuario.js";


const main = async ()=>{
    await mongoose.connect("mongodb+srv://fernandorudnevichinedita:231182@cluster0.xe7glky.mongodb.net/Coder?retryWrites=true&w=majority&appName=Cluster0"), {
        socketTimeoutMS: 50000}
}
    const respuesta = await UserModel.find() 
    console.log(respuesta)

main()
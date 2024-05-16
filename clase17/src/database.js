import mongoose from "mongoose";

mongoose.connect("mongodb+srv://fernandorudnevichinedita:231182@cluster0.xe7glky.mongodb.net/Pizzeria?retryWrites=true&w=majority&appName=Cluster0")
    .then(()=> console.log("todo perfecto"))
    .catch((error)=>console.log("error de conexion"))
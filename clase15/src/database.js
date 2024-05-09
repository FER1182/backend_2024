import mongoose from "mongoose";

mongoose.connect("mongodb+srv://fernandorudnevichinedita:231182@cluster0.xe7glky.mongodb.net/Coderest?retryWrites=true&w=majority&appName=Cluster0")
    .then(()=> console.log("conectado a mongo db"))
    .catch((error)=> console.log("tenemos un error",error))

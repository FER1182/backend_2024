import mongoose from "mongoose"

mongoose.connect("mongodb+srv://fernandorudnevichinedita:231182@cluster0.xe7glky.mongodb.net/Jugueteria?retryWrites=true&w=majority&appName=Cluster0")
    .then(()=>console.log("conectados a la base de datos"))
    .catch((error)=>console.log("tenemos un error",error))

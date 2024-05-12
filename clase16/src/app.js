import mongoose from "mongoose";
import UserModel from "./models/usuario.js";
import AlumnoModel from "./models/alumno.js";
import CursoModel from "./models/cursos.js";

const main = async ()=>{

    await mongoose.connect("mongodb+srv://fernandorudnevichinedita:231182@cluster0.xe7glky.mongodb.net/Coder?retryWrites=true&w=majority&appName=Cluster0")
    
    .then(()=> console.log("conectado a mongo db"))
    .catch((error)=> console.log("tenemos un error",error))




    const respuesta = await UserModel.find({edad :{$lt:19}}).explain("executionStats"); 
    console.log(respuesta)
}
//main()


const principal = async ()=>{
    await mongoose.connect("mongodb+srv://fernandorudnevichinedita:231182@cluster0.xe7glky.mongodb.net/Coder?retryWrites=true&w=majority&appName=Cluster0")
    
    .then(()=> console.log("conectado a mongo db"))
    .catch((error)=> console.log("tenemos un error",error))

    // const estudiantePedro = await AlumnoModel.findById("664105de528754c259fcbc32")
    //    console.log(estudiantePedro);
    
    // // buscamos el curso de backend
    //    const cursoBackend = await CursoModel.findById("6640e6fb41cc64dbd4f88523")
    //    console.log(cursoBackend);
    

    //    estudiantePedro.cursos.push(cursoBackend);
    //   console.log(estudiantePedro);
    // await AlumnoModel.findByIdAndUpdate("664105de528754c259fcbc32",estudiantePedro)
    const estudiantescompletos = await AlumnoModel.findById("664105de528754c259fcbc32")//.populate("cursos")
    console.log(estudiantescompletos);
}


principal()
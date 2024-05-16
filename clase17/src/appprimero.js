// import mongoose from "mongoose";

// import OrderModel from "./models/order.model.js";


// const main = async ()=>{
//     mongoose.connect("mongodb+srv://fernandorudnevichinedita:231182@cluster0.xe7glky.mongodb.net/Pizzeria?retryWrites=true&w=majority&appName=Cluster0")

//     // const respuesta = await OrderModel.find()
//     // console.log(respuesta);

//     const resultado = await OrderModel.aggregate([
//         {
//             $match : {
//                 tam : "familiar"
//             }
//         },
//         {
//             $group :{
//                 _id: "$nombre",
//                 total : {
//                     $sum : "$cantidad"
//                 }
//             }
//         },
//         {
//             $sort : {
//                 total : -1
                
//             }
//         },
//         {
//             $group :{
//                 _id : 1,
//                 orders : {
//                     $push : "$$ROOT"
//                 }
//             }
//         },
//         {
//             $project : {
//                 _id : 1,
//                 orders : "$orders"
//             }
//         },
//         {
//             $merge : {
//                 into : "reportes"
//             }
//         }
 

        
//  ])

//      console.log(resultado);
// }





//main()
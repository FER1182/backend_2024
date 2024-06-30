import mongoose from "mongoose"

const orderSchema = new mongoose.Schema({
    number:String,
    bussineses:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:"busineses"
        },  
    ],
    users:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:"users"
        },
    ],
    products:[],
    totalPrice:Number,
    status:{
        type : String,
        enum:["pending","completed","cancelled"],
        default:"pending"
    }   
})

export const ordersModel = mongoose.model("orders",orderSchema)
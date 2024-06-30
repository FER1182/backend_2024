import mongoose from "mongoose"

const usersSchema = new mongoose.Schema({
    name:String,
    email:String,
    rol:String,
    orders:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:"orders"
        },
    ],
})

export const usersModel = mongoose.model("users",usersSchema)
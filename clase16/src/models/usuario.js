import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    nombre : {
        type: String
    },
    apellido : String,
    email: {
        type : String,
        require : true,
        unique : true
    },
    edad: {
        type : Number,
    }
})

const UserModel = mongoose.model("usuario",userSchema);

export default UserModel;
import mongoose, { Schema } from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const orderSchema = new mongoose.Schema({
    nombre: String,
    tam : String,
    precio : Number,
    cantidad : Number
})

orderSchema.plugin(mongoosePaginate)

const OrderModel = mongoose.model("pizzas", orderSchema)

export default OrderModel
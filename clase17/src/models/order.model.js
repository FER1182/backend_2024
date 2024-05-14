import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    nombre: String,
    tam : String,
    precio : Number,
    cantidad : Number
})

const OrderModel = mongoose.model("Pizzas", orderSchema)

export default OrderModel
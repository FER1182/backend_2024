import { ordersModel } from "../models/orders.model.js";

export class OrdersMongo {
    constructor() {
        this.model = ordersModel;
    }   

    async getAllOrders() {
        try {
            const orders = await this.model.find();
            return orders;
        } catch (error) {
            console.log(error.message);
            throw new Error("Error: al obtener las ordenes");
        }
    }

    async getOrderById(id) {
        try {
            const order = await this.model.findById(id);
            if(!order) throw new Error("Error: orden no encontrada");
            return order;
        } catch (error) {
            console.log(error.message);
            throw new Error("Error: al obtener la orden");
        }
    }

    async createOrder(order) {
        try {
            const newOrder = new this.model.create(order);
            return newOrder;
        } catch (error) {
            console.log(error.message);
            throw new Error("Error: al crear la orden");
        }
    }

    async updateOrder(id, order) {
        try {
            const updatedOrder = await this.model.findByIdAndUpdate(id, order, {new: true});
            return updatedOrder;
        } catch (error) {
            console.log(error.message);
            throw new Error("Error: al actualizar la orden");
        }   
    }    
}
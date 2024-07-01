import { businesesModel } from "../models/busineses.model.js";


export class BusinesesMongo {
    constructor() {
      this.model = businesesModel;
    }   

    async getAllBusineses(){
        try {
            const busineses = this.model.find();
            return busineses;
        } catch (error) {
            console.log(error.message);
            throw new Error("Error: al obtener los negocios");
        }
    }

    async getBusinesesById(id){
        try {
            const busineses = this.model.findById(id);
            if(!busineses) throw new Error("Error: negocio no encontrado");
            return busineses;
        } catch (error) {
            console.log(error.message);
            throw new Error("Error: al obtener el negocio");
        }
    }

    async createBusineses(busineses){
        try {
            const newBusineses = new this.model.create(busineses);
            return newBusineses;
        } catch (error) {
            console.log(error.message);
            throw new Error("Error: al crear el negocio");
        }
    }

    async updateBusineses(id, busineses){
        try {
            const updatedBusineses = this.model.findByIdAndUpdate(id, busineses, {new: true});
            return updatedBusineses;
        } catch (error) {
            console.log(error.message);
            throw new Error("Error: al actualizar el negocio");
        }
    } 

}
import JuguetesModel from "../models/juguetes.model.js";

class MongoDBJuguetesDao {
  async obtenerJuguetes() {
    try {
      return await JuguetesModel.find();
    } catch (error) {
      throw new Error("Error al obtener los juguetes");
    }
  }

  async crearJuguete(juguete) {
    try {
      const nuevoJuguete = new JuguetesModel(juguete);
      return await nuevoJuguete.save();
       
    } catch (error) {
        throw new Error("Error al crear un juguete");
    }
  }
}

export default MongoDBJuguetesDao;

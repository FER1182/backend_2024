import JugueteModel from "../models/juguete.model.js";

class JugueteRepository {
  async crearJuguetes(datosJuguetes) {
    try {
      const jueguete = new JugueteModel(datosJuguetes);
      return await jueguete.save();
    } catch (error) {
        throw new  Error("error al crear el juguete")
    }
  }

  async obtenerJuguetes() {
    try {
        
        return await JugueteModel.find();
      } catch (error) {
          throw new  Error("error  al obtener los juguetes")
      }



  }
}

export default JugueteRepository
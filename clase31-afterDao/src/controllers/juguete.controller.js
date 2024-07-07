import MongoDBJuguetesDao from "../dao/mongoDBJuguetesDao.js";
import memoryJugueteDao from "../dao/memoryJugueteDao.js";
const jugueteService = new memoryJugueteDao();

 class JugueteController {
  async obtenerJuguetes(req, res) {
    try {
      const juguetes = await jugueteService.obtenerJuguetes();
      res.json(juguetes);
    } catch (error) {
      res.status(500).send("error del servidor");
    }
  }
  async crearJuguete(req, res) {
    try {
      const juguete = await jugueteService.crearJuguete(req.body);
      res.json(juguete);
    } catch (error) {
        res.status(500).send("error del servidor");
    }
  }
}


export default JugueteController
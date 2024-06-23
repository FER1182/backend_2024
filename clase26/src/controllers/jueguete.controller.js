import JugueteModel from "../models/juguete.model.js";

class JugueteController {

      async crearJuguetes(req,res){
        const nuevoJuguete = req.body
        try {
            let juguete = new JugueteModel(nuevoJuguete)            
            await juguete.save();
            res.json(juguete)
        } catch (error) {
            res.status(500).json({error:error.message})
        }
    }  

    async obtenerJuguetes(req,res){
        try {
            const juguetes = await JugueteModel.find()
            res.json(juguetes)

        } catch (error) {
            res.status(500).json({error:error.message})
        }
    }
}


export default JugueteController;
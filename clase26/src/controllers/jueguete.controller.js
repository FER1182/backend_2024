import jugueteService from "../services/index.js";

class JugueteController {

      async crearJuguetes(req,res){
        const nuevoJuguete = req.body
        try {
            const juguete = await jugueteService.crearJuguetes(nuevoJuguete)
            res.json(juguete)
        } catch (error) {
            res.status(500).json({error:error.message})
        }
    }  

    async obtenerJuguetes(req,res){
        try {
            const juguetes = await jugueteService.obtenerJuguetes()
            res.json(juguetes)

        } catch (error) {
            res.status(500).json({error:error.message})
        }
    }
}


export default JugueteController;
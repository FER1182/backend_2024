import { json } from 'express';
import fs from 'fs';

class fileSystemJugueteDao {
    async obtenerJuguetes() {
        try {
            const juguetes = await JSON.parse(fs.readFileSync('./src/data/juguetes.json', 'utf-8'));
            return juguetes;
        } catch (error) {
            throw new Error(error);
        }       

    }   
   

    //metodos auxiliares
    async leerArchivo() {
        try {
            const juguetes = await fs.promises.readFile('./src/data/juguetes.json', 'utf-8');
            return JSON.parse(juguetes);
        } catch (error) {
            throw new Error("error al leer el archivo");
        }   
    }


}   

export default fileSystemJugueteDao
import { json } from 'express';
import fs from 'fs';

class fileSystemJugueteDao {
    
    async crearJuguete(juguete) {
        try {
            const juguetes = await this.leerArchivo();
            juguetes.push(juguete);
            await this.escribirArchivo(juguetes);
            return juguete;
        } catch (error) {
            throw new Error("Error al crear un juguete en el archivo");
        }       
    }
    
    async obtenerJuguetes() {
        try {
            const juguetes = await this.leerArchivo();
            return juguetes;
        } catch (error) {
            throw new Error("Error al obtener los juguetes del archivo");
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
    async escribirArchivo(juguetes) {
        try {
            await fs.promises.writeFile('./src/data/juguetes.json', JSON.stringify(juguetes, null, 2));
        } catch (error) {
            throw new Error("error al escribir el archivo");
        }   
    }


}   

export default fileSystemJugueteDao
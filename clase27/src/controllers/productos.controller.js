import ProductoModel from "../models/productos.model.js"
import respuesta from "../utils/reutilizables.js"

class ProductoController{
    async getProductos(req,res){
        try {
            const productos= await ProductoModel.find()
            respuesta(res,200,productos);
        } catch (error) {
            respuesta(res,500,"error al obtener los productos")
        }
    }

    async postProductos(req,res){
        try {
            const nuevoProducto= req.body
            await ProductoModel.create(nuevoProducto)
            respuesta(res,201,"producto creado con exito");
        } catch (error) {
            respuesta(res,500,"error al crear el producto")
        }
    }

}

export default ProductoController;
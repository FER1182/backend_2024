import express from "express";

const router = express.Router()
import ProductManager from "../controller/products-manager.js";
const manager = new ProductManager();

router.get("/", async (req, res) => {
    try {
        const limit = req.query.limit;
        const productos = await manager.getProducts();
        if (limit) {
            res.json(productos.slice(0, limit));
        } else {
            res.json(productos);
        }
    } catch (error) {

        console.error("Error al obtener productos", error);
        res.status(500).json({
            error: "Error interno del servidor"
        });
    }
})


router.get("/:pid", async (req, res) => {

    const id = req.params.pid;

    try {

        const producto = await manager.getProductById(id);
        if (!producto) {
            return res.json({
                error: "Producto no encontrado"
            });
        }

        res.json(producto);
    } catch (error) {
        console.error("Error al obtener producto", error);
        res.status(500).json({
            error: "Error interno del servidor"
        });
    }
})

router.post("/", async(req, res) => {
    const nuevoProducto = req.body;
    try {

        const producto = await manager.addProduct(nuevoProducto);
      
        res.send({message:"producto agregado"})
    } catch (error) {
        console.error("Error al guardar el producto", error);
        res.status(500).json({
            error: "Error interno del servidor"
        });
    }
    
    
})

router.put("/:pid", async(req, res) => {
    const id = req.params.pid;
    const productoActual = req.body;
    try {

        const producto = await manager.updateProduct(id,productoActual);
      
        res.send({message:"producto actualizado con exito"})
    } catch (error) {
        console.error("Error al guardar el producto", error);
        res.status(500).json({
            error: "Error interno del servidor"
        });
    }
    
    
})

router.delete("/:pid", async(req, res) => {
    const id = req.params.pid;
    try {

        const producto = await manager.deletProduct(id);
      
        res.send({message:"producto eliminado con exito"})
    } catch (error) {
        console.error("Error al guardar el producto", error);
        res.status(500).json({
            error: "Error interno del servidor"
        });
    }
    
    
})


export default router
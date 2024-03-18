import express from "express";

const router = express.Router()

import CartManager from "../controller/carts-manager.js";
const manager = new CartManager("./src/models/carts.json");

router.get("/carts/:cid", async (req, res) => {

    const id = req.params.cid;

    try {

        const producto = await manager.getProductById(parseInt(id));
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

router.post("/carts", async(req, res) => {
    const nuevoProducto = req.body;
    try {

        const producto = await manager.addCart(nuevoProducto);
      
        res.send({message:"producto agregado"})
    } catch (error) {
        console.error("Error al guardar el producto", error);
        res.status(500).json({
            error: "Error interno del servidor"
        });
    }
    
    
})

router.post("/carts/:cid/product/:pid", async(req, res) => {
    const id = parseInt(req.params.pid);
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




export default router
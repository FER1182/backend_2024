import express from "express";

const router = express.Router()

import CartManager from "../controller/carts-manager.js";
const manager = new CartManager("./src/models/carts.json");

router.get("/carts/:cid", async (req, res) => {

    const id = req.params.cid;

    try {

        const carrito = await manager.getCartById(parseInt(id));
        if (!carrito) {
            return res.json({
                error: "Carrito no encontrado"
            });
        }

        res.json(carrito);
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
      
        res.send({message:"carrito agregado"})
    } catch (error) {
        console.error("Error al guardar el producto", error);
        res.status(500).json({
            error: "Error interno del servidor"
        });
    }
    
    
})

router.post("/carts/:cid/product/:pid", async(req, res) => {
    const idCart =parseInt(req.params.cid); 
    const idProduct = parseInt(req.params.pid);
    const productoAgregado = req.body;
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
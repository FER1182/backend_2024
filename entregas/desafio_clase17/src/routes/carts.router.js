import express from "express";

const router = express.Router()

import CartManager from "../controller/carts-manager.js";
const manager = new CartManager();

router.get("/:cid", async (req, res) => {

    const id = req.params.cid;

    try {

        const carrito = await manager.getCartById(id);
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

router.post("/", async (req, res) => {
    const nuevoProducto = req.body;
    try {

        const producto = await manager.addCart();

        res.send({ message: "carrito agregado" })
    } catch (error) {
        console.error("Error al guardar el producto", error);
        res.status(500).json({
            error: "Error interno del servidor"
        });
    }


})

//agrega productos al carrito

router.post("/:cid/product/:pid", async (req, res) => {
    const idCart = req.params.cid;
    const idProduct = req.params.pid;
    const cantProdAgregado = req.body.quantity;
    try {

        const actualizarCarrito = await manager.updateCart(idCart, idProduct, cantProdAgregado);
        if (!actualizarCarrito) {
            return res.json({
                error: "Carrito no encontrado"
            });
        }
        res.json(actualizarCarrito.products)
        

    } catch (error) {
        console.error("Error al guardar el producto", error);
        res.status(500).json({
            error: "Error interno del servidor"
        });
    }


})

router.delete("/:cid/product/:pid", async(req, res) => {
    const idCart = req.params.cid;
    const idProduct = req.params.pid;
    try {

        const producto = await manager.deleteProductCart(idCart,idProduct);
      
        res.send({message:"producto eliminado con exito del carrito"})
    } catch (error) {
        console.error("Error al eliminar producto del carrito", error);
        res.status(500).json({
            error: "Error interno del servidor"
        });
    }
    
    
})


export default router
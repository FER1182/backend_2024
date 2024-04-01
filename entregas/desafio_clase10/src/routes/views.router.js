import express from "express";
const router = express.Router();

import ProductManager from "../controller/products-manager.js";
const manager = new ProductManager("./src/models/productos.json");


router.get("/", async (req, res) => {
    try {

        const productos = await manager.getProducts();
        res.render("home", { productos, titulo: "supermecado" });

    } catch (error) {

        console.error("Error al obtener productos", error);
        res.status(500).json({
            error: "Error interno del servidor"
        });
    }
})

router.get("/realtimeproducts", (req, res) => {

    res.render("realTimeProducts", { titulo: "supermecado" });

})
router.get("/contacto", (req, res) => {
    res.render("contacto")
})
export default router



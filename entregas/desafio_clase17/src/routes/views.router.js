import express from "express";
const router = express.Router();

import ProductManager from "../controller/products-manager.js";
const manager = new ProductManager("./src/models/productos.json");


router.get("/", async (req, res) => {
    try {

        const {limit = 10, page = 1, sort, query }= req.query;
        const productos = await manager.getProducts({
            limit : parseInt(limit),
            page: parseInt(page),
            sort,
            query
        });
           const productoFinal = productos.docs.map(producto=>{
            const {_id, ...rest} = producto.toObject();
            console.log(rest); 
            return rest;
         })
        res.render("home", { productoFinal, titulo: "supermecado" });

    } catch (error) {

        console.error("Error al obtener productos", error);
        res.status(500).json({
            error: "Error interno del servidor"
        });
    }
})

router.get("/chat", (req, res) => {

    res.render("chat", { titulo: "CHAT" });

})
router.get("/contacto", (req, res) => {
    res.render("contacto")
})
export default router



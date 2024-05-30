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
         
         res.json({
            status : "success", 
            payload: productos,
            totalPages: productos.totalPages,
            prevPage : productos.prevPage,
            nextPage : productos.nextPage,
            page : productos.page,
            hasPrevPage: productos.hasPrevPage,
            hasNextPage: productos.hasNextPage,
            prevLink : productos.hasPrevPage ? `/api/products?limit=${limit}&page=${productos.prevPage}&sort=${sort}&query=${query}` : null,
            nextLink : productos.hasNextPage ? `/api/products?limit=${limit}&page=${productos.nextPage}&sort=${sort}&query=${query}` : null,
        }) 
        

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

router.get("/login", (req,res)=>{
    res.render("login")
})

router.get("/register", (req,res)=>{
    res.render("register")
})


export default router



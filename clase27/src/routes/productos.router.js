import express from "express";
const router = express.Router()
import ProductoController from "../controllers/productos.controller.js"
const productoController = new ProductoController()

//aca importamos los controladreos

router.get("/",productoController.getProductos)
router.post("/",productoController.postProductos);

export default router;
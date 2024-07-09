import express from "express";

const router = express.Router()
import ProductController from "../controller/products.controller.js";
const productController = new ProductController();
import passport from "passport";

router.get("/",passport.authenticate("jwt", {session :false}),productController.getProducts)
router.get("/:pid", productController.getProductById)
router.post("/", productController.addProduct)
router.put("/:pid", productController.updateProduct)
router.delete("/:pid", productController.deleteProduct)


export default router
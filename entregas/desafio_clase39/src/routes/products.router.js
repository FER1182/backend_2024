import express from "express";

const router = express.Router()
import ProductController from "../controller/products.controller.js";
const productController = new ProductController();
import passport from "passport";
import authorizeRole from "../middleware/checkrole.js";

router.get("/",passport.authenticate("jwt", {session :false}),productController.getProducts)


router.get("/realtimeproducts",authorizeRole(["admin","premium"]), productController.renderRealTimeProducts);

router.get("/:pid",passport.authenticate("jwt", {session :false}), productController.getProductById)
//estos no tienen vistas solo con p
router.post("/",authorizeRole(["admin","premium"]), productController.addProduct)
router.put("/:pid",authorizeRole(["admin","premium"]), productController.updateProduct)
router.delete("/:pid",authorizeRole(["admin","premium"]), productController.deleteProduct)


export default router
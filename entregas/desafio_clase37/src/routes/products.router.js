import express from "express";

const router = express.Router()
import ProductController from "../controller/products.controller.js";
const productController = new ProductController();
import passport from "passport";

router.get("/",passport.authenticate("jwt", {session :false}),productController.getProducts)
router.get("/realtimeproducts",passport.authenticate("jwt", {session :false}), (req, res) => {
   
    if(req.user.role === "admin" || req.user.role === "premium"){
    res.render("realTimeProducts", { titulo: "supermecado" });
    }else{
    res.send("No tiene acceso");
    }    
})
router.get("/:pid",passport.authenticate("jwt", {session :false}), productController.getProductById)
//estos no tienen vistas solo con p
router.post("/", productController.addProduct)
router.put("/:pid", productController.updateProduct)
router.delete("/:pid", productController.deleteProduct)


export default router
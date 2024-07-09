import express from "express";

const router = express.Router()
import CartsController from "../controller/carts.controller.js";
const cartsController = new CartsController();


router.get("/", cartsController.getCarts);
router.get("/:cid", cartsController.getCartById);
router.post("/", cartsController.addCart);   
router.put("/:cid/product/:pid", cartsController.updateCart);
router.delete("/:cid/product/:pid", cartsController.deleteProductCart);
router.delete("/:cid", cartsController.emptyCart)

export default router
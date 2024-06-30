import {Router} from "express"

const router = Router()

import {getOrders,createOrder,getOrderById,resolveOrder} from "../controllers/orders.controller.js"


router.get("/",getOrders)
router.post("/",createOrder)
router.get("/:uid",getOrderById)
router.put("/:uid",resolveOrder)

export {router as orderRouter}
import {Router} from "express"

const router = Router()

import {getBusinesesById,createBusineses,getAllBusineses,addProduct} from "../controllers/busineses.controller.js"

router.get("/",getAllBusineses)
router.post("/",createBusineses)
router.get("/:bid",getBusinesesById)
router.put("/:bid/product",addProduct)

export {router as businesesRouter}
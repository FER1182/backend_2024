import express from "express";
const router = express.Router();
import JugueteController from "../controllers/jueguete.controller.js"
const jugueteController = new JugueteController();

router.get("/",jugueteController.obtenerJuguetes);
router.post("/",jugueteController.crearJuguetes);

export default router;
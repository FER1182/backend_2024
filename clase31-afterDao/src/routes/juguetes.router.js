import express from "express";
import JugueteController from '../controllers/juguete.controller.js';
const jugueteController = new JugueteController();
const router = express.Router();


router.get('/', jugueteController.obtenerJuguetes)
router.post('/', jugueteController.crearJuguete)

export default router
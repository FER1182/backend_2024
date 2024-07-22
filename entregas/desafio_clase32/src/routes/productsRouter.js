import express from "express";
const router = express.Router();
import CustomError from "../services/errors/custom-error.js";
import generarInfoError from "../services/errors/info.js";
import { EErrors } from "../services/errors/enum.js";

//guardo los usuarios en un array
const productos = [];

//rutas
router.post("/", async (req, res, next) => {
  try {
    const producto = req.body;
    if ( producto.title && producto.description && producto.price && producto.stock && producto.category && producto.status) {
        productos.push(producto);
        res.send({ status : "success", payload: producto, message: "producto creado con exito"});
    } else {
      throw CustomError.crearError({
        nombre: "Error al generar el producto",
        causa: generarInfoError(producto),
        mensaje: "error al intentar crear el producto",
        codigo: EErrors.TIPO_INVALIDO,
      });
    }
  } catch (error) {
    next(error);
  }
});

export default router;

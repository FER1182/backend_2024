import express from "express";
const router = express.Router();
import CustomError from "../services/errors/custom-error.js";
import generarInfoError from "../services/errors/info.js";
import { EErrors } from "../services/errors/enum.js";

//guardo los usuarios en un array
const usuarios = [];

//rutas
router.post("/", async (req, res, next) => {
  try {
    const usuario = req.body;
    if (usuario.nombre && usuario.apellido && usuario.email) {
      usuarios.push(usuario);
      res.send({ status : "success", payload: usuario });
    } else {
      throw CustomError.crearError({
        nombre: "Error al registrar usuario",
        causa: generarInfoError(usuario),
        mensaje: "error al intentar crear el usuario",
        codigo: EErrors.TIPO_INVALIDO,
      });
    }
  } catch (error) {
    next(error);
  }
});

export default router;

//instalamos la dependencia dotenv para manejar las variables de entorno
import dotenv from "dotenv";
import program from "../utils/commander.js";

const { mode } = program.opts();

dotenv.config({
  path: mode === "produccion" ? "./.env.produccion" : "./.env.desarrollo",
});

const configObjet = {
    puerto : process.env.PUERTO,
    mongo_url : process.env.MONGO_URL
}

export default configObjet;
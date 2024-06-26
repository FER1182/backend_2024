import dotenv from "dotenv"
import program from "../utils/commander.js"
import { mongo } from "mongoose"

const {mode}= program.opts()

dotenv.config({
    path: mode === "produccion" ? "./.env.produccion" : "./.env.desarrollo"
})

const configObjet ={
    mongo_url : process.env.MONGO_URL
}

export default configObjet
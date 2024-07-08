import config from "../config/config.js";
import MongoDBJuguetesDao from "./mongoDBJuguetesDao.js";
import memoryJugueteDao from "./memoryJugueteDao.js";
import fileSystemJugueteDao from "./fileSystemJugueteDao.js";
let DAO;

switch (config.persistence) {
    case "fileSystem":
        
        
         DAO = new fileSystemJugueteDao();
        break;
    case "mongoDB":
        DAO = new MongoDBJuguetesDao();
        break;
    default:
        DAO = new memoryJugueteDao();
}
console.log(DAO)
export default DAO;

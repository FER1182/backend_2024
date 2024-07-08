import config from "../config/config.js";

let DAO;

switch (config.persistence) {
    case "fileSystem":
        const {fileSystemJugueteDao} = await import("./fileSystemJugueteDao.js")
        console.log("hola")
         DAO = fileSystemJugueteDao;
        break;
    case "mongoDB":
        const {MongoDBJuguetesDao} = await import("./mongoDBJuguetesDao.js")
        console.log("mongo")
        DAO =  MongoDBJuguetesDao;
        break;
    default:
        const memoryJugueteDao = await import("./memoryJugueteDao.js")
        console.log(memoryJugueteDao)
        DAO = new memoryJugueteDao();
}
console.log(DAO)
export default DAO;
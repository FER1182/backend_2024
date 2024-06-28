import { Router } from "express";
import { ContactsMongo } from "../dao/managers/mongo/contacts.mongo.js";


const router = Router()
const contactsService = new ContactsMongo()



router.get("/",async(req,res)=>{
    try {
        const contacts= await contactsService.get()
        res.send({status:"succes",payload: contacts})    
    } catch (error) {
        res.status(500).send({status:"error",error: error.message})       
    }
    
    
})


export default router
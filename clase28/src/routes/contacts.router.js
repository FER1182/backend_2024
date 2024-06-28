import { Router } from "express";
// import { ContactsMongo } from "../dao/managers/mongo/contacts.mongo.js";
// import {ContactsMemory} from "../dao/managers/memory/contacts.memory.js"
import { contactsDao } from "../dao/factory.js";


const router = Router()
//const contactsService = new ContactsMongo()
//const contactsService = new ContactsMemory()


router.get("/",async(req,res)=>{
    try {
        const contacts= await contactsDao.get()
        res.send({status:"succes",payload: contacts})    
    } catch (error) {
        res.status(500).send({status:"error",error: error.message})       
    }
    
    
})

router.post("/",async(req,res)=>{
    try {
        const contact= req.body
        const newContact = contactsDao.post(contact)
        res.send({status:"succes",payload: newContact})    
    } catch (error) {
        res.status(500).send({status:"error",error: error.message})       
    }
    
    
})


export default router
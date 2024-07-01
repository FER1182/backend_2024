import {businesesDao} from "../dao/index.js"
import {v4 as uuidv4} from "uuid"

export const getAllBusineses = async (req,res)=>{
   try{
       const busineses = await businesesDao.getAllBusineses()
       res.send({status:"succes",result:busineses})
   }catch(error){
       res.status(500).send({ error: error.message})
   }
}

export const createBusineses = async (req,res)=>{
   try {
    const busineses = req.body
    const newBusineses = await businesesDao.createBusineses(busineses)
    res.send({status:"succes",result:newBusineses})
   } catch (error) {
    res.status(500).send({ error: error.message})
   }
}   

export const getBusinesesById = async (req,res)=>{
    try {
        const {bid} = req.params
        const busineses = await businesesDao.getBusinesesById(bid)
        res.send({status:"succes",result:busineses})
    } catch (error) {
        res.status(500).send({ error: error.message})
    }  
}

export const addProduct = async (req,res)=>{
    try {
        const {bid} = req.params
        const {name,price} = req.body
        if(!bid || !name || !price) throw new Error("Error: faltan datos")
            
            const busineses = await businesesDao.getBusinesesById(bid)
            const newProduct = {
                id:uuidv4(),
                name,
                price
            }    
            busineses.products.push(newProduct);
            const updatedBusineses = await businesesDao.updateBusineses(bid,busineses)
            res.send({status:"succes",result:updatedBusineses})
    } catch (error) {
        res.status(500).send({ error: error.message})
    }
}
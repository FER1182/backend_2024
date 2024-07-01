import { orderDao} from "../dao/index.js"
export const getOrders = async (req,res)=>{
    try {
        const orders = await orderDao.getAllOrders()
        res.send({status:"success",result:orders})      
    } catch (error) {
        res.status(500).send({ error: error.message})  
    }
}

export const createOrder = async (req,res)=>{
    try {
        const {userId,businessId,products} = req.body
        const totalPrice = products.reduce((total,product)=>{
            total+=product.price
        },0)
        const newOrder = {
            number : uuidv4(),
            bussineses : businessId,
            user: userId,
            products,
            totalPrice
        }
        const order = await orderDao.createOrder(newOrder)
        res.send({status:"success",result:newOrder})
    } catch (error) {
        res.status(500).send({ error: error.message})
    }
    
}

export const getOrderById = async (req,res)=>{
    try {
       const order = orderDao.getOrderById(req.params.uid)
        res.send({status:"success",result:order})
    } catch (error) {
        res.status(500).send({ error: error.message})
    }
}

export const resolveOrder =async(req,res)=>{
    try {
        const {uid} = req.params;
        const order= await orderDao.getOrderById(uid)
        order.status = "completed"
        const orderUpdate = orderDao.resolveOrder(uid,order)
        res.send({status:"success",result:orderUpdate})   
    } catch (error) {
        res.status(500).send({ error: error.message})
    } 
}
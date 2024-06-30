export const getOrders = (req,res)=>{
    res.send({status:"success",result:"orders"})
}

export const createOrder = (req,res)=>{
    res.send({status:"success",result:"createOrder"})
}

export const getOrderById = (req,res)=>{
    res.send({status:"success",result:"getOrderById"})
}

export const resolveOrder = (req,res)=>{
    res.send({status:"success",result:"resolveOrder"})  
}
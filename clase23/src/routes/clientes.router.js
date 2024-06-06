import express from "express"
const router = express.Router()


router.get("/nombre/:cliente([a-z]+)", (req,res)=>{
    //esperampos un nombre del cliente
    let cliente = req.params.cliente
    res.send("cliente: "+cliente)
})

//otra forma de hacerlo

router.get("/email/:email", (req,res)=>{
    const patronCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const email= req.params.email

    if(patronCorreo.test(email)){
         res.send("email valido: "+ email)
    }else{
        res.send("email invalido")
    }
})

//validando parametros
router.get("/nombre/:cliente([a-z]+)", (req,res)=>{
    res.send("obteniendo recurso para el cliente +" + req.params.cliente)
})

//validando parametros y cargo
router.post("/nombre/:cliente([a-z]+)", (req,res)=>{
    //envio un recurso apartir del parametro cliente
    res.send("enviando recursos para el cliente +" + req.params.cliente)
})

//validando parametros y actualizo
router.put("/nombre/:cliente([a-z]+)", (req,res)=>{
    res.send("actualizando recursos para el cliente +" + req.params.cliente)
})


//validando parametros y elimino
router.put("/nombre/:cliente([a-z]+)", (req,res)=>{
    res.send("eliminando recursos para el cliente +" + req.params.cliente)
})


//router.params evita la repeticion de los 4 codigos anteriores

router.param("cliente",(req,res,next,cliente)=>{
    const clientes =  ["firulais","lionel","pepe"];
    if(clientes.includes(cliente)){
        req.cliente = cliente
        next();
    }else{
        res.status(404).send("recurso no encontrado")
    }
})

export default router
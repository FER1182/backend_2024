//creando un custom router

import express from "express"
const router= express.Router()

class Router{
    constructor(){
        this.router = router;
        this.init();
    }
    getRouter(){
        return this.router;
    }
    //init(){}

    get(path,...callbacks){
        this.router.get(path, this.generateCustomResponse,this.applyCallbacks(callbacks))
    }    

    applyCallbacks(callbacks){
        return callbacks.map(callback => async (...params)=>{
            try {
                await callback.apply(this,params)
            } catch (error) {
                console.log(error);
                params[1].status(500).send(error)
            }
        })
    }

    //custom response
    generateCustomResponse(req,res,next){
        res.sendSucces = payload => res.send({status:"success",payload})
        res.sendServerError = error => res.status(500).send({status:"error",error})
        res.sendUserError = error => res.status(400).send({status :"error",error})
        next();
    }


}

export default Router;
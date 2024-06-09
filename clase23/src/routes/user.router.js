import Router from "./router.js"

class UserRouter extends Router{
    init(){
        //aca colocamos todas nuestras rutas
        this.get("/",(req,res)=>{
            //res.send("get usuarios")
            //res.sendSucces("hola estaas en el success en el payload")
            res.sendServerError("error en el seridor con sendservererror")
        })

        // this.post("/",(req,res)=>{
        //     res.send("post usuarios")
        // })

        // this.put("/",(req,res)=>{
        //     res.send("put usuarios")
        // })
        
    }
}

export default UserRouter;
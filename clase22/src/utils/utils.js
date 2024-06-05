import passport from "passport";
import { Strategy } from "passport-jwt";



export const passportCall = (strategy) =>{
    return async (req,res,next)=>{
        passport.authenticate(strategy,(error,user,info)=>{
            if(error){
                return next(error)
            }
            if(!user){
                res.status(401).send({error : info.message ? info.message : info.toString()})
            }
            req.user = user;
            next();
        }) (req,res,next)
    }
}

//para crear un usuario premium q no es adminsitrador pero puede agregar productos
export const aturization = (role) =>{
    return async (req,res,next)=>{
        if(req.user.role!== role){
            return res.status(403).send({message:"no tenes permiso"})
        }
        next();
    }
}
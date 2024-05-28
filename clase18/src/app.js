import express from "express"
import cookieParser from "cookie-parser";
import session from "express-session";
const app = express()
const PORT = 8080;

//instalamos session npm i express-session
//instalamso dependencia para gestionar cookies npi cookie-parser


//middleware
//de cookis parser
const claveSecreta = "tinkiwinki"
app.use(cookieParser(claveSecreta));
app.use(session({
    secret: "secretCoder",
    resave : true,
    //esto me permite mantener inisiado frente a la inactividad del 
    saveUninitialized : true,
    //me permite guardar cualkier sesion aunque no tenga datos para guardar
}))

//middleware de autenticasion
function auth(req,res,next){
    
    if(req.session.user=== "tinky" && req.session.admin === true){
        return next();
    }
    return res.status(403).send("error de autenticacion")
}


//enpoints
app.get("/", (req,res)=>{
     res.send("oliis")
})

app.get("/setcookie", (req,res)=>{
    res.cookie("coderCookie","mi primera cosa con cookies",{maxAge:100000}).send("cookie seteadao")
})

//leemos el valor de una cookie

app.get("/leercookie", (req,res)=>{
    res.send(req.cookies)
})

//borrar cookie
app.get("/borrarcookie", (req,res)=>{
    res.clearCookie("coderCookie").send("cookie eliminada")
})

//enviar cookie firmadoa
app.get("/cookieFirmada", (req,res)=>{
    res.cookie("cookieFirmada","esto es un mensaje secreto",{signed:true}).send("cookie firmada enviada");
})

//leer cookie firmadoa
app.get("/recuperamoscookieFirmada", (req,res)=>{
    const valorCookie = req.signedCookies.cookieFirmada;
    if(valorCookie) {
     res.send("cookie firmada enviada " + valorCookie);   
    } else {
        res.send("cookie invalido")
    }
     
})

//levantamos una sesion

app.get("/session", (req,res)=>{
     if(req.session.counter){
        req.session.counter++;
        res.send("Visitaste el sitio "+ req.session.counter + " veces")
     }else{
        req.session.counter = 1
        res.send("Bienvenido! unite al club de session!")
     }
})

//eliminamos la session
app.get("/logout", (req,res)=>{
    req.session.destroy((error) =>{
        if(!error){
            res.send("session cerrada")
        }else{
            res.send("error al cerrad la sesion")
        }
    })
        
})

//login con sesion
app.get("/login", (req,res)=>{
    let {usuario,pass} = req.query;
    
        if(usuario === "tinky" && pass === "winki"){
            req.session.user = usuario;
            req.session.admin = true;
            res.send("inicio de sesion exitosa")
        }else{
            res.send("dato incorrectos")
        }
})

//ruta privada con login 
app.get("/privado", auth, (req,res)=>{
    res.send("si llegas hasta aca es porque estas logeado")
})


app.listen(PORT,()=>{
    console.log(`trabajando en el puerto:${PORT}`);
});
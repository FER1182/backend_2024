import expres from "express";
const router = expres.Router();
import UsuarioModel from "../models/usuario.model.js";

//login

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const usuario = await UsuarioModel.findOne({ email: email });
    if (usuario) {
       
      if (usuario.password === password) {
        req.session.login = true;
        req.session.user = {
          email: usuario.email,
          first_name: usuario.first_name,
        };
        res.redirect("/profile");
      } else {
        res.status(401).send("contraseña no valida");
      }
    } else {
      res.status(404).send("usuario no encontrado");
    }
  } catch (error) {
        res.status(400).send("error en el login")
  }
});

//logout

router.get("/logout",(req,res)=>{
    if(req.session.login){
        req.session.destroy()
    }
    res.redirect("/login")
})

export default router;

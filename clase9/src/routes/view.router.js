const express = require("express");
const router = express.Router();

let arrayProductos = [
    {nombre: "Fideos", descripcion: "Los mas ricos", precio: 100},
    {nombre: "Arroz", descripcion: "El que no se pasa", precio: 200},
    {nombre: "Helado", descripcion: "Mas frio que el corazon de tu ex", precio: 5000},
    {nombre: "Coca Cola", descripcion: "Cada dia mas cara", precio: 10000}
];
//ruta

router.get("/",(req,res)=>{
    const usuario ={
        nombre:"tinkki",
        apellido:"winki",
        mayorEdad :true//la evaluacion siempre se hace aca.no en la plantilla
    }
    res.render("index",{usuario, arrayProductos,titulo:"plantillita"})
})
router.get("/contacto",(req,res)=>{
    res.render("contacto")
})

module.exports = router;
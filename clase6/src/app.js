//vamos a usar express para hacer un servidor



const express = require("express")

const PUERTO = 8080;

//creamos una app de express

const app = express();

//rutas

app.get("/",(req,res)=>{
    //cuando "/" hago referencia a la pagina principal de mi aplicaciones
    res.send("mi primera pagina con express")
})
//Los metodos HTTP o verbos son los que le indican al servidor
//que tipo de accion queremos realizar
//lo mas utilizados 
//GET pedimos datos al servidor
//POST lo utilizamos para enviar datos al servidor
//PUT se usa para actualizar datos
//DELETE lo usamos para eliminar datos




app.listen(PUERTO,()=>{
       console.log(`escuchando en el http://localhost:${PUERTO}`)
})

//practicamos con otras rutas
app.get("/tienda",(req,res)=>{
    res.send("bienvenidos a la tienda")
})

app.get("/contacto",(req,res)=>{
    res.send("bienvenidos a contacto")
})
//objeto request es un objeto con informacion de los q pide el cliente

const misProductos =[
        {id:1, nombre: "Fideos", precio: 150},
        {id:2, nombre: "Arroz", precio: 250},
        {id:3, nombre: "Pan", precio: 350},
        {id:4, nombre: "Leche", precio: 450},
        {id:5, nombre: "Queso", precio: 550},
        {id:6, nombre: "Manteca", precio: 650},
        {id:7, nombre: "Galletitas", precio: 750},
]

app.get("/productos",(req,res)=>{
    res.send(misProductos)
})

//req.params = contiene los parametros de la rurta 
app.get("/productos/:id",(req,res)=>{
    let id = parseInt(req.params.id);
    //siempre q recuperamos un dato de params es un string
    // para solucinar usamos el parseInt
    const producto = misProductos.find(producto=>producto.id === id );
    if(producto){
        res.send(producto)
    }else(res.send("producto no encontrado"))    
})

//req.query
//query son cuando tengo multiples consultas al servidor y le tenemos q pasar varios datos
//lecolocamos el signo de interrogacion y luego el nombre de la consulta

app.get("/clientes",(req,res)=>{
      let nombre = req.query.nombre;
      let apellido = req.query.apellido   
    res.send(`bienvenido ${nombre} ${apellido}`)    
//clientes?nombre=tinki&apellido=qinki

})

//PARA EL DESAFIO PARA REDUCIR EL ARRAY ES CON SLIDE
//EL PROFE ACLARO AL FINAL DE LA CLASE COMO PONER EL ASYN AWAIT.. MIRAR LOS ULTIMOS MINUTOS



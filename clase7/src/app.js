//holaaa prueba
//npm init -yes
//npm i nodemon -D
//npm i express

//codigo de estado en el request 
//tiene distintas categorias ver en el repo del profe


//api ..es aplication programin interface
// es un conjunto de definiciones y reglas que permiten que 2 equipos puedan integrarse y trabajar juntos
//las peticiones a la api rest son get post put delete
import express from "express";// "types": "module", agregar en el package json abajo del main
//const express = requier("express") esta es la otra forma de importar
const app = express();
const PORT = 8080;

//midelware se explicar clase q viene pero lo usamos ahora por necesidad
//cada vez que hay una peticion y una respues los midelware trabajan para procesar esa respuesta
app.use(express.json())
//voy a utlizar json par amis datos
app.use(express.urlencoded({ extended: true }))//esto le dice al servidor que vamos a trabajar con datos complejos
//es decir recibir por ejemplo varias querys

//creamos un array de clientes
const clientes = [
    { id: "1", nombre: "lionel", apellido: "messi" },
    { id: "2", nombre: "coky", apellido: "romost" },
    { id: "3", nombre: "roberto", apellido: "caron" },
    { id: "4", nombre: "luismi", apellido: "pavon" },
    { id: "5", nombre: "luisjuan", apellido: "parodi" }
]

//rutas

app.get("/", (req, res) => {
    res.send(clientes);
})

//version con limite en el retorno de productos
app.get("/conlimit/:limit", (req, res) => {
    //let limit = req.params.limit; otra fomra de hacerlo
    let { limit } = req.params;

    const arrayConlimites = clientes.slice(0, parseInt(limit))
    res.send(arrayConlimites)
})

//retorno un cliente por id
app.get("/cliente/:id", (req, res) => {
    let id = req.params.id;
    const buscado = clientes.find(clientes => clientes.id == id);
    if (buscado) {
        res.send(buscado)

    } else {
        res.send("no hay ningun cliente con ese ID")
    }
})

//descargar postman desde https://www.postman.com/downloads/

// trabajamos con una ruta post para enviar informacion
app.post("/", (req, res) => {
    const clienteNuevo = req.body;

    clientes.push(clienteNuevo)
    console.log(clientes);
    res.status(201).send({ message: "cliente nuevo reado" })
})
//en postman metodo post pongo body y ahi raw y formato 
//json y cargo los datos

//vamos a actualizar un dato :PUT

app.put("/:id", (req, res) => {
    const { id } = req.params;
    const { nombre, appellido } = req.body

    //tengo q encontrar el cliente con el id usamos findeindex
    const clienteIndex = clientes.findIndex(cliente => cliente.id == id)
    //sino lo encuentra retorna -1

    if (clienteIndex !== -1) {
        clientes[clienteIndex].nombre = nombre;
        clientes[clienteIndex].apellido = appellido;
        console.log(clientes);
        res.status(201).send({ message: "cliente actualizado" })
    } else {
        res.status(404).send({ message: "cliente no encontrado" })
    }

})

//hago el delet
app.delete("/:id",(req,res)=>{
    let id =req.params.id;
    const clienteIndex = clientes.findIndex(cliente => cliente.id === id)

    if (clienteIndex !== -1) {
        clientes.splice(clienteIndex,1)
        console.log(clientes);
        res.status(201).send({ message: "cliente eliminado" })
    } else {
        res.status(404).send({ message: "cliente no encontrado" })
    }
})



//siempre hay que inicializar el servidor

app.listen(PORT, () => {
    console.log(`escuchando en el Http://localhost:${PORT}`);
})

//npm run dev---- para ejecutar en la terminal
//clase27

import express from "express"
const app = express()
const PORT=8080;


//midelware
app.use(express.json())
app.use(express.urlencoded({extended:true}));
app.use(express.static("./src/public"));

//rutas



app.listen(PORT,()=>{
    console.log("escuchando en el puerto")
})
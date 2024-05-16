import mongoose from "mongoose-paginate-v2";
import OrderModel from "./models/order.model.js";
import "./database.js"

import express from "express"
import exphbs from "express-handlebars"
const app = express();
const PUERTO = 8080;

//expres-handlebars

app.engine("handlebars", exphbs.engine());
app.set("view engine","handlebars");
app.set("views","./src/views")

app.get("/pizzas", async (req,res)=>{
    try {
        
        let page = req.query.page || 1 ;
        let limit = 2;

        const pizzas = await OrderModel.paginate({},{limit, page})
        console.log(pizzas);    
        const pizzasResultadFInal = pizzas.docs.map(pizza=>{
            const {_id, ...rest} = pizza.toObject();
            return rest;
        })

        //.lean()//ellean no da acceosa las propiedades
        res.render("pizzas",{
            pizzas : pizzasResultadFInal,
            hasPrevPage : pizzas.hasPrevPage,
            hasNextPage : pizzas.hasNextPage,
            prevPage : pizzas.prevPage,
            nextPage : pizzas.nextPage,
            currentPage : pizzas.page,
            totalPages : pizzas.totalPages    
        })

    } catch (error) {
        res.status(500).send("error en el servidor")
    }
})


app.listen(PUERTO, ()=>{
    console.log(`escuchando en el puerto ${PUERTO}`);
})
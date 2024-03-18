import express from "express"

const app = express();
const PORT = 8080;



//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Rutas 
import productsRouter from "./routes/products.router.js"
//import cartsRouter from "./routes/carts.router.js"



app.use("/api/",productsRouter);
//app.use("/",cartsRouter)


app.listen(PORT, () => {
  console.log(`Escuchando en el puerto ${PORT}`);
});


import express from "express";
const app = express();
const PORT = 8080;
import mockingRouter from './routes/mockingRouter.js';
import productsRouter from './routes/productsRouter.js';
import manejadorError  from "./middleware/error.js";

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", mockingRouter);
app.use("/addProduct", productsRouter);
app.use(manejadorError);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});


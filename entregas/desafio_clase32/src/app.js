import express from "express";
const app = express();
const PORT = 8080;
import mockingRouter from './routes/mockingRouter.js';



app.use("/api", mockingRouter);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});


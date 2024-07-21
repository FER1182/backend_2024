//***   ****//
//***  ****//

import express from "express";

const app = express();
const PORT = 8080;


//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//routes
app.get("/", (req, res) => {
    let string = "hola coders, soy un string ridiculamente largo"
    for (let i = 0; i < 5e4; i++) {
        string += "hola coders, soy un string ridiculamente largo"
    }
    res.send(string)
});
//npm i express-compression


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})

//sin compresion datos transferido 2.3mb 
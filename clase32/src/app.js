//***   ****//
//***  ****//

import express from "express";

const app = express();
const PORT = 8080;

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

import compression from "express-compression";
//lo usamos como middleware

//GZIP
//app.use(compression());
//BROTLI
app.use(
  compression({
    brotli: {
      enabled: true,
      zlib: {},
      //zlib es una depenndencia que espera diferentes nivelss de compresion
    },
  })
);

//routes
app.get("/", (req, res) => {
  let string = "hola coders, soy un string ridiculamente largo";
  for (let i = 0; i < 5e4; i++) {
    string += "hola coders, soy un string ridiculamente largo";
  }
  res.send(string);
});
//npm i express-compression

//GZIP algorithmo de compresion de datos muy utilizado

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

//sin compresion datos transferido 2.3mb
//con compresion los datos 7.1kb
// con brotlei 364 bytes
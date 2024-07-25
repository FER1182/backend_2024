//console.log(process.pid);

//el proceso principal se llama primary process y las multiples instancias se llaman workers
//vamos a usar el modulo nativo CLUSTER
import express from "express";
import cluster from "cluster";
import { cpus } from "os";
const numeroDeProcesadores = cpus().length;
//console.log("numero de procesadores: ", numeroDeProcesadores)

if (cluster.isPrimary) {
  console.log(`Primary ${process.pid} is running`);
  for (let i = 0; i < numeroDeProcesadores; i++) {
    cluster.fork();
  }
} else {
  // console.log("soy un proceso worker y mi PID es: ", process.pid);

  const app = express();

  app.get("/", (req, res) => {
    res.send("peticion atendida por un proceso worker");
  });

  app.get("/operacionsimple", (req, res) => {
    let suma = 0;
    for (let index = 0; index < 1000000; index++) {
      suma += index;
    }
    res.send({ suma });
  });
  app.get("/operacioncompleja", (req, res) => {
    let suma = 0;
    for (let index = 0; index < 5e8; index++) {
      suma += index;
    }
    res.send({ suma });
  });

  app.listen(8080, () => {
    console.log("escuchando en el puerto 8080");
  });
}

//tasklist /fi "imagename eq node.exe" ponems en la consola y nos da la info
//comando para probar con artillery: nodemon src/app.js
//artillery quick --count 40 --num 50 "http://localhost:8080/operacionsimple" -o simple.json 
//artillery quick --count 40 --num 50 "http://localhost:8080/operacioncompleja" -o compleja.json 


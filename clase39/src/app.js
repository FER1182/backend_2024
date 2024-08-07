import express from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';

import usersRouter from './routes/users.router.js';
import petsRouter from './routes/pets.router.js';
import adoptionsRouter from './routes/adoption.router.js';
import sessionsRouter from './routes/sessions.router.js';

const app = express();
const PORT = process.env.PORT||8080;
// Configura la opción strictQuery para evitar la advertencia
mongoose.set('strictQuery', false); // Cambia a true si prefieres el nuevo comportamiento

mongoose.connect("mongodb+srv://fernandorudnevichinedita:231182@cluster0.xe7glky.mongodb.net/Adoptame?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>console.log("DB connected"))
.catch((error)=>console.log(error))

app.use(express.json());
app.use(cookieParser());

app.use('/api/users',usersRouter);
app.use('/api/pets',petsRouter);
app.use('/api/adoptions',adoptionsRouter);
app.use('/api/sessions',sessionsRouter);

app.listen(PORT,()=>console.log(`Listening on ${PORT}`))

// 1-instalamos http://swagger.io
//npm i swaa
//swager-jsdoc nos deja escribir la configuración en un archivo .yaml y a partir de ahi crear el archivo apidoc
//swagger-ui-express permite linkear una interfaz grafica para poder visualizar la documentación
//2 importamos los modulos
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUiExpress from 'swagger-ui-express';
//3crear objeto de configuración swaggerOptions


const swaggerOptions = {
    definition:{
        openapi:'3.0.1',
        info:{
            title:'Adoptame API',
            version:'1.0.0',
            description:'Documentacion de la API para la app Adoptame',
        }
    },
    apis:["./src/docs/**/*.yaml"]
    }
    
//4-conectar swager a express
const specs = swaggerJSDoc(swaggerOptions);
app.use('/apidocs',swaggerUiExpress.serve,swaggerUiExpress.setup(specs))
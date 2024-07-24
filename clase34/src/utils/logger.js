import winston from "winston";

// const logger = winston.createLogger({

//     transports: [
//         new winston.transports.Console({level: 'http'}),
//         new winston.transports.File({filename: './error.log', level: 'warn'})
//     ],
// });

//personalizar nuestros niveles

const niveles ={
    nivel :{
        fatal: 0,
        error: 1,
        warn: 2,
        info: 3,
        http: 4,
        debug: 5    
    },
    colores: {
        fatal: 'red',
        error: 'white',
        warn: 'yellow',
        info: 'green',
        http: 'magenta',
        debug: 'blue'
    }
}

const logger = winston.createLogger({
    levels: niveles.nivel,
    transports: [
        new winston.transports.Console({
            level: 'http',
            format: winston.format.combine(
                winston.format.colorize({colors: niveles.colores}),
                winston.format.simple()
            )
        }),
        new winston.transports.File({
            filename: './error.log',
            level: 'http',
            format: winston.format.simple()
        })
    ]
})
//creamos un middleware
const addLogger = (req, res, next) => {

    req.logger = logger;
    req.logger.http(`${req.method} en ${req.url} - ${new Date().toLocaleTimeString()}`);
    next();
};

export default addLogger;
//almacen una funcion q da por consola el mensaje de error  
const generarInfoError = (producto) => {
    return `los datos estan incompletos o no son correctos .
    necesitamos recibir los siguientes datos 
    -codigo: String pero recibimos los siguiento ${producto.codigo}

    ` 
}

export default generarInfoError
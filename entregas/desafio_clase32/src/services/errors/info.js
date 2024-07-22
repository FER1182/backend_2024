//almacen una funcion q da por consola el mensaje de error  
const generarInfoError = (producto) => {
    return `los datos estan incompletos o no son correctos .
    necesitamos recibir los siguientes datos 
    -code: String pero recibimos los siguiento ${producto.code}
    title   : String pero recibimos los siguiento ${producto.title} 
    description : String pero recibimos los siguiento ${producto.description}
    price : Number pero recibimos los siguiento ${producto.price}
    stock : Number pero recibimos los siguiento ${producto.stock}
    category : String pero recibimos los siguiento ${producto.category}
    status : Boolean pero recibimos los siguiento ${producto.status}

    ` 
}

export default generarInfoError
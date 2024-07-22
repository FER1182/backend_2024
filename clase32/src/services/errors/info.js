//almacen una funcion q da por consola el mensaje de error  
const generarInfoError = (usuario) => {
    return `los datos estan incompletos o no son correctos .
    necesitamos recibir los siguientes datos 
    -nombre: String pero recibimos los siguiento ${usuario.nombre}
    -apellidos: String pero recibimos  ${usuario.apellido}
    -email: String pero recibimos  ${usuario.email}
    ` 
}

export default generarInfoError
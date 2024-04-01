const socket = io()


socket.on("productos", (data) => {
    const contenedorProductos = document.getElementById("contenedorProductos");
    contenedorProductos.innerHTML = "";
    data.forEach(item => {
        const card = document.createElement("div");
        card.innerHTML = `
                            <p> Id: ${item.id}</p>
                            <p> Titulo: ${item.title}</p>
                            <p> Precio: ${item.price}</p>
                            <button> Eliminar Producto </button>
            `
        contenedorProductos.appendChild(card)
        card.querySelector("button").addEventListener("click", () => {
            eliminarProducto(item.id)
        })

    })

})

const eliminarProducto = (id) =>{
    socket.emit("eliminarProducto",id)
}
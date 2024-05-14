const socket = io()

const formateador = new Intl.NumberFormat('es-ES');
socket.on("productos", (data) => {
    const contenedorProductos = document.getElementById("contenedorProductos");
    contenedorProductos.innerHTML = "";
    data.forEach(item => {
        const card = document.createElement("div");
        card.innerHTML = `
                            <div class="card" style="width: 18rem;">
                                <img src="${item.img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                     <p> Id: ${item.id}</p>
                                     <h5 class="card-title">${item.title}</h5>
                                     <p> Precio: $ ${formateador.format(item.price)}</p>   
                                     <button> Eliminar Producto </button>
                                </div>
                            </div>
                    
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


document.getElementById("btnEnviar").addEventListener("click",()=>{
    agregarProductos();
    
})

const agregarProductos = () =>{
    const producto ={
        title: document.getElementById("title").value,
        description: document.getElementById("description").value,
        price: document.getElementById("price").value,
        img: document.getElementById("img").value,
        code: document.getElementById("code").value,
        stock: document.getElementById("stock").value,
        category: document.getElementById("category").value,
        status: document.getElementById("status").value 
        
    };
    document.getElementById("formRealTime").reset();
    socket.emit("agregarProductos",producto);

}
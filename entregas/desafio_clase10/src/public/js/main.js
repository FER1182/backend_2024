const socket = io()


socket.on("productos", (data) =>{
    const contenedorProductos= document.getElementById("contenedorProductos");
    contenedorProductos.innerHTML= "";
    data.forEach(item => {
        const card = document.createElement("div");
        card.innerHTML = `
                                

        
        `

    })
    
})
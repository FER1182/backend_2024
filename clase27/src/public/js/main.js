const formularioProductos = document.getElementById("formularioProductos");

formularioProductos.addEventListener("submit", async (event) => {
  event.preventDefault();
  //prevenimos q  el formulario se envie automaticamente

  const nombre = document.getElementById("nombre").value;
  const categoria = document.getElementById("categoria").value;
  const precio = document.getElementById("precio").value;

  const data = {
    nombre: nombre,
    categoria: categoria,
    precio: precio,
  };

  try {
    await fetch("/productos",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify(data)
    })
    alert("datos enviados correctamente")
  } catch (error) {
        console.log("tenemos un error",error)
        alert("tenemos un error")
  }


});

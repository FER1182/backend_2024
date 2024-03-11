const fs = require("fs");
const { title } = require("process");

class ProductManager {
  constructor(path) {
    this.products =[];
    this.productIdCounter = 1; // Contador para el id autoincremental
    this.path = path;
  }


  addProduct(title, description, price, thumbnail, code, stock) {
    // Validar que ninguna propiedad esté vacía
    if (!title || !description || !price || !thumbnail || !code || !stock) {
      console.error("No se pueden agregar productos con propiedades vacías.");
      return null;
    }

    // Validar que no exista un producto con el mismo code
    if (this.products.some((producto) => producto.code === code)) {
      console.error(`Ya existe un producto con el code ${code}.`);
      return null;
    }

    const producto = {
      id: this.productIdCounter++,
      title: title, //nombre del producto
      description: description, //descripcion del producto
      price: price,
      thumbnail: thumbnail, //ruta de imagen
      code: code, //codigo identificador
      stock: stock, //numero de piezas disponibles
    };
    this.products.push(producto);

    const guardarArchivos = async () => {
      await fs.promises.writeFile(
        this.path,
        JSON.stringify(this.products, null, 2)
      );
    };
    guardarArchivos();
    return producto; // Retornamos el producto agregado
  }
  
  
  getProductById(id) {
    const productArchivo = this.getProducts()
    const producto = productArchivo.find((producto) => producto.id === id);
    if (producto) {
      console.log(producto)
      return producto;
    } else {
      console.error(`Error: Producto con id ${id} no encontrado.`);
      return null;
    }
  }
  getProducts() {
    if (fs.existsSync(this.path)) {
       const leerArchivos =  () => {
        const respuesta = fs.readFileSync(this.path, "utf-8");
        const nuevoArray = JSON.parse(respuesta);
        return nuevoArray;
      };
      const archivoLeido = leerArchivos()
      return archivoLeido;
    } else {
      return 
    }
  }
  
  mostrarProductos(){
    if(this.getProducts()){
    const producto = this.getProducts();
    console.log(producto)
    }else{
      console.log("no existen productos")
    }
  }
  
  
  
  updateProduct(id,campoActualizar){
    const prodCompleto = this.getProducts()
  }
  

  deletProduct(id){
    const prodCompleto = this.getProducts()
    const productoSinEliminado = prodCompleto.filter((producto) => producto.id !== id);
    console.log(productoSinEliminado)
    const guardarArchivo = async () => {
      await fs.promises.writeFile(
        this.path,
        JSON.stringify(productoSinEliminado, null, 2)
      );
    };
    guardarArchivo();
  }

}

// Ejemplo de uso:
const manager = new ProductManager("./productos.json");
//Se llamará “getProducts” recién creada la instancia, debe devolver no existe el archivo
//manager.getProducts();

// // Agrego producto de prueba
// manager.addProduct("producto prueba5","Este es un producto prueba5",205,"sin imagen","abc5",25);
// manager.addProduct("producto prueba4","Este es un producto prueba4",204,"sin imagen","abc4",125);
// manager.addProduct("producto prueba8","Este es un producto prueba8",208,"sin imagen3","abc8",135);
// Muestra el producto agregado
//manager.mostrarProductos();

// Se llamará al método “addProduct” con los mismos campos de arriba, debe arrojar un error porque el código estará repetido.
//manager.addProduct("producto prueba", "Este es un producto prueba", 200, "sin imagen", "abc123", 25);

// Obtener un producto por id
//manager.addProduct("producto prueba 2", "Este es un producto prueba 2", 100, "sin imagen2", "abc2123", 20);

//manager.getProductById(1); 


// Obtener un producto por id que no existe
//manager.getProductById(10); 
//manager.updateProduct(2,{title:"soy el que actualiza"}); 
manager.deletProduct(2);
// Intentar agregar un producto con propiedades vacías
//manager.addProduct("", "Descripción", 25, "thumbnail4.jpg", "PROD02", 5);


// Mostrar los productos agregados
//manager.getProducts();


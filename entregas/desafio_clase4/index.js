const { createDiffieHellmanGroup } = require("crypto");
const fs = require("fs")


class ProductManager {
    constructor(path) {
        this.products = [];
        this.productIdCounter = 1; // Contador para el id autoincremental
        this.path = path
    }

    addProduct(title, description, price, thumbnail, code, stock) {
        // Validar que ninguna propiedad esté vacía
        if (!title || !description || !price || !thumbnail || !code || !stock) {
            console.error("No se pueden agregar productos con propiedades vacías.");
            return null;
        }

        // Validar que no exista un producto con el mismo code
        if (this.products.some(producto => producto.code === code)) {
            console.error(`Ya existe un producto con el code ${code}.`);
            return null;
        }

        const producto = {
            id: this.productIdCounter++,
            title: title,//nombre del producto
            description: description, //descripcion del producto
            price: price,
            thumbnail: thumbnail,//ruta de imagen
            code: code,//codigo identificador
            stock: stock//numero de piezas disponibles
        };
        this.products.push(producto);

        const guardarArchivos = async () => {
            await fs.promises.writeFile(this.path, JSON.stringify(this.products, null, 2));
        }
        guardarArchivos();
        return producto; // Retornamos el producto agregado
    }
    getProductById(id) {
        const producto = this.products.find(producto => producto.id === id);
        if (producto) {
            return producto;
        } else {
            console.error(`Error: Producto con id ${id} no encontrado.`);
            return null;
        }
    }
    getProducts() {
        const leerArchivos = async () => {
            const respuesta = await fs.promises.readFile(this.path, "utf-8");
            const nuevoArray = JSON.parse(respuesta);
            console.log(nuevoArray);
        }
        leerArchivos();
        
       
    }
}

// Ejemplo de uso:
const manager = new ProductManager("./productos.json");
//Se llamará “getProducts” recién creada la instancia, debe devolver un arreglo vacío []
manager.getProducts();

// Agrego producto de prueba
//manager.addProduct("producto prueba", "Este es un producto prueba", 200, "sin imagen", "abc123", 25);
//manager.addProduct("producto prueba2", "Este es un producto prueba2", 200, "sin imagen", "abc1232", 125);
// Muestra el producto agregado
manager.getProducts();

// Se llamará al método “addProduct” con los mismos campos de arriba, debe arrojar un error porque el código estará repetido.
/*manager.addProduct("producto prueba", "Este es un producto prueba", 200, "sin imagen", "abc123", 25);

// Obtener un producto por id
manager.addProduct("producto prueba 2", "Este es un producto prueba 2", 100, "sin imagen2", "abc2123", 20);

const producto = manager.getProductById(2); 
console.log(producto);

// Obtener un producto por id que no existe
manager.getProductById(10); 

// Intentar agregar un producto con propiedades vacías
manager.addProduct("", "Descripción", 25, "thumbnail4.jpg", "PROD02", 5);


// Mostrar los productos agregados
manager.getProducts();
*/
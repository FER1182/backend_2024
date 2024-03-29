class ProductManager {
    constructor() {
        this.products = [];
        this.productIdCounter = 1; // Contador para el id autoincremental
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
        if(this.products.length ===0){
            console.log(this.products)
        }else{
            this.products.forEach(producto => {
                console.log(`ID: ${producto.id}, Title: ${producto.title}, Description: ${producto.description}, Price: ${producto.price}, Thumbnail: ${producto.thumbnail}, Code: ${producto.code}, Stock: ${producto.stock}`);
            });
        }
    }
}

// Ejemplo de uso:
const manager = new ProductManager();
//Se llamará “getProducts” recién creada la instancia, debe devolver un arreglo vacío []
manager.getProducts();

// Agrego producto de prueba
manager.addProduct("producto prueba", "Este es un producto prueba", 200, "sin imagen", "abc123", 25);
// Muestra el producto agregado
manager.getProducts();

// Se llamará al método “addProduct” con los mismos campos de arriba, debe arrojar un error porque el código estará repetido.
manager.addProduct("producto prueba", "Este es un producto prueba", 200, "sin imagen", "abc123", 25);

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

import { promises as fs } from 'fs';

class ProductManager {
    constructor(path) {
        this.products = [];
        this.productIdCounter = 1; // Contador para el id autoincremental
        this.path = path;
    }

    async addProduct(objetoProduct) {
        let {
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        } = objetoProduct;

        // Validar que ninguna propiedad esté vacía
        if (!title || !description || !price || !thumbnail || !code || !stock) {
            console.error("No se pueden agregar productos con propiedades vacías.");
            return;
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
        // Guardamos el array en el archivo:

        await this.guardarArchivo(this.products);

    }

    async getProducts() {
        try {
            const nuevoArray = await this.leerArchivos();
            return nuevoArray;
        } catch (error) {
            console.log("Error al leer el archivo", error);
        }
    }

    async getProductById(id) {
        try {
            const productArchivo = await this.leerArchivos();
            console.log(productArchivo);
            const producto = productArchivo.find((producto) => producto.id === id);
            console.log(producto);
            if (!producto) {
                console.error(`Error: Producto con id ${id} no encontrado.`);
            } else {
                console.log("producto encontrado")
                return producto;
            }
        } catch (error) {
            console.log("Error al leer el archivo", error);
        }
    }


    async leerArchivos() {
        try {
            const respuesta = await fs.readFile(this.path, "utf-8");
            const arrayProductos = JSON.parse(respuesta);
            return arrayProductos;
        } catch (error) {
            console.log("Error al leer el archivo", error);
        }
    }

    async guardarArchivo(arrayProductos) {
        try {
            await fs.writeFile(this.path, JSON.stringify(arrayProductos, null, 2));
        } catch (error) {
            console.log("Error al guardar el archivo", error);
        }
    }

    // Actualizamos algun producto:
    async updateProduct(id, productoActualizado) {
        try {
            const arrayProductos = await this.leerArchivos();

            const index = arrayProductos.findIndex(item => item.id === id);

            if (index !== -1) {

                arrayProductos.splice(index, 1, productoActualizado);
                await this.guardarArchivo(arrayProductos);
            } else {
                console.log("no se encontró el producto");
            }

        } catch (error) {
            console.log("Error al actualizar el producto", error);
        }
    }

    // Eliminamos algun producto:

    async deletProduct(id) {
        try {
            const prodCompleto = await this.leerArchivos();
            const index = arrayProductos.findIndex(item => item.id === id);

            if (index !== -1) {

                const productoSinEliminado = prodCompleto.filter((producto) => producto.id !== id);
                await this.guardarArchivo(productoSinEliminado);
            } else {
                console.log("no se encontró el producto");
            }

        } catch (error) {
            console.log("Error al eliminar el producto", error);
        }
    }

}

export default ProductManager;








import { promises as fs } from 'fs';

class CartManager {
    constructor(path) {
        this.carts = [];
        this.cartsIdCounter = 1; // Contador para el id autoincremental
        this.path = path;
    }

    async addCart(products) {

          if (this.getProducts()) {
            const arrayArchivos = await this.getProducts()
            this.products = arrayArchivos
            let max = Math.max.apply(Math, arrayArchivos.map(function (o) { return o.id; }))
            this.productIdCounter = max + 1
          }
        const cart = {
            id: this.cartsIdCounter++,
            products: [{
                idProducts : products,
                cantidad : cantidad++ 
            }]
            

        };
        this.carts.push(cart);
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
            productoActualizado = Object.assign({id:id},productoActualizado)
               

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
            const index = prodCompleto.findIndex(item => item.id === id);

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

export default CartManager;








import { promises as fs } from 'fs';

class CartManager {
    constructor(path) {
        this.carts = [];
        this.cartsIdCounter = 1; // Contador para el id autoincremental
        this.path = path;
    }

    
    //agrega el carrito con el producto
    async addCart(objectProducts) {
        let {
            idProducts,
            cantidad,
        } = objectProducts;

        
        if (this.getCarts()) {
            const arrayArchivos = await this.getCarts()
            this.carts = arrayArchivos
            let max = Math.max.apply(Math, arrayArchivos.map(function (o) { return o.id; }))
            this.cartsIdCounter = max + 1
        }
        
        const cart = {
            id: this.cartsIdCounter++,
            products: [{
                idProducts : idProducts,
                cantidad : cantidad 
            }]
            

        };
        this.carts.push(cart);
        // Guardamos el array en el archivo:

        await this.guardarArchivo(this.carts);

    }

    async getCarts() {
        try {
            const nuevoArray = await this.leerArchivos();
            return nuevoArray;
        } catch (error) {
            console.log("Error al leer el archivo", error);
        }
    }

    //lista productos que pertenezcan al carrito
    async getCartById(id) {
        try {
            const cartArchivo = await this.leerArchivos();
            
            const cart = cartArchivo.find((producto) => producto.id === id); 
            
            if (!cart) {
                console.error(`Error: Carrito con id ${id} no encontrado.`);
            }else{
                return cart.products ;
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

    async guardarArchivo(arrayCarts) {
        try {
            await fs.writeFile(this.path, JSON.stringify(arrayCarts, null, 2));
        } catch (error) {
            console.log("Error al guardar el archivo", error);
        }
    }

    // Actualizamos algun producto:
    async updateCart(idCart,idProduct, productoAgregado,) {
        try {
            const arrayCarts = await this.leerArchivos();
            productoActualizado = Object.assign({id:idCart},productoAgregado)
               

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


}

export default CartManager;








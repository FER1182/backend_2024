import { promises as fs } from 'fs';

class CartManager {
    constructor(path) {
        this.carts = [];
        this.cartsIdCounter = 1; // Contador para el id autoincremental
        this.path = path;
    }

    //agrega el carrito con el producto
    async addCart() {
            const arrayArchivos = await this.getCarts()
            this.carts = arrayArchivos
        if (this.carts.length>0) {    
            let max = Math.max.apply(Math, arrayArchivos.map(function (o) { return o.id; }))
            this.cartsIdCounter = max + 1
        }

        const cart = {
            id: this.cartsIdCounter++,
            products: []
    };
        this.carts.push(cart);
        // Guardamos el array en el archivo:

        await this.guardarArchivo();

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
            } else {
                return cart;
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
            await this.guardarArchivo();
        }
    }

    async guardarArchivo() {
        try {
            await fs.writeFile(this.path, JSON.stringify(this.carts, null, 2));
        } catch (error) {
            console.log("Error al guardar el archivo", error);
        }
    }

    // Actualizamos algun producto:
    async updateCart(idCart, idProduct, cantProductoAgregado = 1,) {
        try {
            const arrayCarts = await this.leerArchivos();



            const index = arrayCarts.findIndex(item => item.id === idCart);

            if (index !== -1) {
                const cartSelect = await this.getCartById(idCart)
                const indexProd = cartSelect.products.findIndex(item => item.idProducts === idProduct);
                if (indexProd !== -1) {
                    cartSelect.products[indexProd].cantidad+=cantProductoAgregado;
                }else{    
                    cartSelect.products.push({
                        idProducts: idProduct,
                        cantidad: cantProductoAgregado
                    })
                }
                arrayCarts.splice(index, 1, cartSelect);
                this.carts = arrayCarts
                await this.guardarArchivo();
                return cartSelect
            }
            
        } catch (error) {
            console.log("Error al actualizar el producto", error);
        }
    }


}

export default CartManager;








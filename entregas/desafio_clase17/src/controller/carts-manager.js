import { promises as fs } from 'fs';
import CartModel from "../models/cart.model.js";


class CartManager {
    //agrega el carrito con el producto
    async addCart() {
        try {
          const nuevoCarrito = new CartModel({products:[]});
          await nuevoCarrito.save()
          return nuevoCarrito;  
        } catch (error) {
            console.log("error al crear carrito nuevo",error);
            throw error
        }
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
            const cart = await CartModel.findById(id);

            if (!cart) {
                console.error(`Error: Carrito con id ${id} no encontrado.`);
            } else {
                return cart;
            }

        } catch (error) {
            console.log("Error al leer el archivo", error);
        }
    }





    // Actualizamos algun producto:
    async updateCart(idCart, idProduct, quantity = 1,) {
        try {
            const cart = await this.getCartById(idCart);
            const existeProducto = cart.products.find(item =>item.product.toString()=== idProduct)
            
        if(existeProducto){
            existeProducto.quantity += quantity;
        } else {
            cart.products.push({product: idProduct,quantity});

        }   

        cart.markModified("products")
        await cart.save();    
        return cart;
           
            
        } catch (error) {
            console.log("Error al actualizar el producto", error);
        }
    }


    // Actualizamos algun producto:
    async deleteProductCart(idCart, idProduct,) {
        try {
            const cart = await this.getCartById(idCart);
            const deletProduct = cart.products.filter(item =>item.product.toString()!== idProduct);
            console.log(deletProduct);
            if (!deletProduct) {
              console.error(`Error: Producto con id ${id} no encontrado en el carrito.`);
              return null;
            } else {
              console.log("producto eliminado del carrito");
              return deletProduct;
            }
            
        cart.markModified("products")
        await cart.save();    
        return cart;
           
            
        } catch (error) {
            console.log("Error al actualizar el carrito", error);
        }
    }

}

export default CartManager;








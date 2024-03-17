import { promises as fs } from "fs";

class ProductManager {
    constructor(path) {
      this.products = [];
      this.productIdCounter = 1; // Contador para el id autoincremental
      this.path = path;
    }
}  
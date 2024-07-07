class memoryJugueteDao {
  constructor() {
    this.juguetes = [];
  }

  async crearJuguete(juguete) {
    try {
      this.juguetes.push(juguete);
      return juguete;
    } catch (error) {
      throw new Error("Error al crear un juguete");
    }
  }

  async obtenerJuguetes() {
    try {
      return this.juguetes;
    } catch (error) {
      throw new Error("Error al obtener los juguetes");
    }
  }
}

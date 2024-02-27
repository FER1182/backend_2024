class Persona{
    constructor(nombre,edad){
        this.edad = edad;
        this.nombre= nombre;
    }
    saludar(){
        console.log("hola soy " + this.nombre)
    }
    
}

const coky = new Persona("coki",30);
console.log(coky)
coky.saludar()
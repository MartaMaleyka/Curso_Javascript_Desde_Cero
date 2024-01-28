// Definición de la clase Animal
class Animal {
    constructor(nombre, tipo) {
      this.nombre = nombre;
      this.tipo = tipo;
    }
  
    // Método para emitir un sonido genérico
    emitirSonido() {
      console.log("El animal emite un sonido");
    }
  }
  
  // Definición de la clase Perro que hereda de la clase Animal
  class Perro extends Animal {
    constructor(nombre, tipo, raza) {
      // Llamada al constructor de la clase padre (Animal) utilizando super()
      super(nombre, tipo);
      this.raza = raza;
    }
  
    // Método para que el perro ladre (sobrescribe el método de la clase padre)
    emitirSonido() {
      console.log("El perro ladra");
    }
  
    // Método específico de la clase Perro para correr
    correr() {
      console.log(`${this.nombre} corre alegremente`);
    }
  }
  
  // Creación de una instancia de la clase Perro
  const perro1 = new Perro("Bobby", "Perro", "Pug");
  
  console.log(perro1); // Output: Perro { nombre: 'Bobby', tipo: 'Perro', raza: 'Pug' }
  perro1.correr(); // Output: Bobby corre alegremente
  perro1.emitirSonido(); // Output: El perro ladra
  
  // Agregar un nuevo método directamente a la instancia perro1
  perro1.nuevoMetodo = function () {
    console.log("Este es un método");
  };
  
  // Agregar un nuevo método al prototipo de la clase Perro
  Perro.prototype.segundoMetodo = function () {
    console.log("Es otro nuevo método");
  };
  
  // Agregar un nuevo método al prototipo de la clase Animal (que también será heredado por Perro)
  Animal.prototype.tercerMetodo = function () {
    console.log("Un método más");
  };
  
  perro1.nuevoMetodo(); // Output: Este es un método
  perro1.segundoMetodo(); // Output: Es otro nuevo método
  perro1.tercerMetodo(); // Output: Un método más
  
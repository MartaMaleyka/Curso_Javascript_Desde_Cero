// Definición de la clase Persona
class Persona {
    // Constructor de la clase Persona que recibe el nombre y la edad
    constructor(nombre, edad) {
      // Inicialización de las propiedades nombre y edad
      this.nombre = nombre;
      this.edad = edad;
    }
  
    // Método saludar de la clase Persona
    saludar() {
      // Imprime un saludo con el nombre y la edad de la persona
      console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
    }
  }
  
  // Creación de una instancia persona1 de la clase Persona con nombre "Mariana" y edad 25
  const persona1 = new Persona("Mariana", 25);
  
  // Llamada al método saludar de la instancia persona1
  persona1.saludar(); // Output: Hola, mi nombre es Mariana y tengo 25 años.
  
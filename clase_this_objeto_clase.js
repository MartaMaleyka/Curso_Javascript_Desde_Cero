/* 
  this --- class: Dentro de una clase, la palabra clave "this" se refiere a la clase misma.
  
  this --- objeto -- class: Fuera de la clase, cuando se utiliza en el contexto de un objeto creado a partir de esa clase, "this" se refiere a la instancia específica del objeto.
*/

// Definición de la clase Persona
class Persona {
    constructor(nombre, edad) {
      this.nombre = nombre; // "this.nombre" se refiere a la propiedad "nombre" de la instancia de la clase Persona
      this.edad = edad; // "this.edad" se refiere a la propiedad "edad" de la instancia de la clase Persona
    }
  }
  
  // Creación de una instancia de la clase Persona llamada persona1
  const persona1 = new Persona("Alice", 25);
  
  console.log(persona1); // Output: Persona { nombre: 'Alice', edad: 25 }
  
  // Agregar un nuevo método a la instancia persona1 utilizando "this"
  persona1.nuevoMetodo = function () {
    console.log(`Mi nombre es ${this.nombre}`); // "this.nombre" se refiere al valor de "nombre" en la instancia persona1
  };
  
  // Llamar al nuevo método agregado a persona1
  persona1.nuevoMetodo(); // Output: Mi nombre es Alice
  
/*
Estructura de datos clave/valor:

Objeto {
  propiedad: valor,
  propiedad: valor,
  propiedad: valor,
  Métodos
}
*/

// Definición de un objeto persona
const persona = {
    nombre: "John", // Propiedad "nombre" con valor "John"
    edad: 30, // Propiedad "edad" con valor 30
    direccion: { // Propiedad "direccion" que es un objeto anidado
      calle: "Av Insurgentre 187", // Propiedad "calle" con valor "Av Insurgente 187"
      ciudad: "CDMX", // Propiedad "ciudad" con valor "CDMX"
    },
    saludar() { // Método "saludar" que muestra un saludo utilizando el nombre de la persona
      console.log(`Hola, mi nombre es ${persona.nombre}`);
    },
  };
  
  // Imprimir el objeto persona
  console.log(persona);
  
  // Acceder a la propiedad "nombre" del objeto persona
  console.log(persona.nombre); // Output: "John"
  
  // Llamar al método "saludar" del objeto persona
  persona.saludar(); // Output: "Hola, mi nombre es John"
  
  // Agregar una nueva propiedad "telefono" al objeto persona
  persona.telefono = "555-555-5555";
  
  // Imprimir el valor de la nueva propiedad "telefono"
  console.log(persona.telefono); // Output: "555-555-5555"
  
  // Agregar un nuevo método "despedir" al objeto persona utilizando una arrow function
  persona.despedir = () => {
    console.log("Adiós");
  };
  
  // Llamar al método "despedir" del objeto persona
  persona.despedir(); // Output: "Adiós"
  
  // Acceder a la propiedad "calle" del objeto persona a través de la propiedad "direccion"
  console.log(persona.direccion.calle); // Output: "Av Insurgente 187"
  
  // Borrar la propiedad "telefono" del objeto persona
  delete persona.telefono;
  
  // Borrar el método "despedir" del objeto persona
  delete persona.despedir(); // No es necesario llamar a la función delete en este caso
  
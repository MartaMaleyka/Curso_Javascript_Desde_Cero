// Definición de una función constructora "Persona"
function Persona(nombre, apellido, edad) {
    // Utilizamos la palabra clave "this" para hacer referencia al nuevo objeto que se está creando
    this.nombre = nombre; // Propiedad "nombre" del objeto creado
    this.apellido = apellido; // Propiedad "apellido" del objeto creado
    this.edad = edad; // Propiedad "edad" del objeto creado
  }
  
  // Creación de un nuevo objeto "persona1" utilizando la función constructora "Persona"
  const persona1 = new Persona("Juan", "Perez", 20);
  console.log(persona1); // Output: { nombre: 'Juan', apellido: 'Perez', edad: 20 }
  
  // Añadir una nueva propiedad "nacionalidad" al objeto "persona1"
  persona1.nacionalidad = "Mexicano";
  
  // Creación de otro objeto "persona2" utilizando la función constructora "Persona"
  const persona2 = new Persona("Diego", "De Granda", 35);
  console.log(persona2); // Output: { nombre: 'Diego', apellido: 'De Granda', edad: 35 }
  
  // Definición de un método "saludar" en el prototipo de la función constructora "Persona"
  Persona.prototype.saludar = function () {
    // Utilizamos la palabra clave "this" para hacer referencia al objeto que invocó el método
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`);
  };
  
  // Llamar al método "saludar" en los objetos "persona1" y "persona2"
  persona1.saludar(); // Output: Hola, me llamo Juan Perez
  persona2.saludar(); // Output: Hola, me llamo Diego De Granda
  
/*Las funciones constructoras en JavaScript son funciones utilizadas para crear y inicializar objetos. 
Estas funciones se utilizan en conjunción con el operador `new` para instanciar objetos. Al crear 
objetos con funciones constructoras, puedes aprovechar el concepto de prototipos para compartir métodos 
y propiedades entre instancias.

Aquí hay un ejemplo básico de una función constructora:
*/

// Función constructora
function Persona(nombre, edad) {
  // Propiedades de la instancia
  this.nombre = nombre;
  this.edad = edad;

  // Método de la instancia
  this.presentarse = function () {
    console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años.`);
  };
}

// Instanciación de objetos usando la función constructora
const persona1 = new Persona("Alice", 30);
const persona2 = new Persona("Bob", 25);

// Uso de las instancias
persona1.presentarse(); // Hola, soy Alice y tengo 30 años.
persona2.presentarse(); // Hola, soy Bob y tengo 25 años.


/*En este ejemplo, la función `Persona` actúa como una plantilla para crear objetos `Persona`. 
Se utilizan las propiedades `this.nombre` y `this.edad` para asignar valores específicos a cada 
instancia de la persona. Además, cada instancia tiene su propio método `presentarse`.

Es importante destacar que, aunque este enfoque es válido, 
también tiene algunos inconvenientes, como la duplicación de funciones para cada instancia creada.
Para abordar esto, puedes utilizar el prototipo para compartir métodos entre instancias:
*/

function Personas(nombre, edad) {
  this.nombre = nombre;
  this.edad = edad;
}

// Agregar un método al prototipo de Persona
Personas.prototype.presentarse1 = function () {
  console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años.`);
};

const persona3 = new Personas("Alice", 30);
const persona4 = new Personas("Bob", 25);

persona3.presentarse1(); // Hola, soy Alice y tengo 30 años.
persona4.presentarse1(); // Hola, soy Bob y tengo 25 años.


/*En este segundo ejemplo, el método `presentarse` se agrega al prototipo de la función constructora 
`Persona`, lo que significa que todas las instancias comparten la misma función. Esto reduce la 
duplicación de código y es más eficiente en términos de memoria.

Espero que esta explicación te sea útil. Si tienes alguna pregunta adicional, no dudes en preguntar. */
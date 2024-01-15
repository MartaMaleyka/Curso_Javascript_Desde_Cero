//En JavaScript, hay dos formas de trabajar con strings: los strings primitivos y los strings objeto.

// Strings Primitivos:

//Los strings primitivos son valores inmutables y se representan mediante el tipo de datos `string`. Estos 
//son los más comunes y se crean utilizando comillas simples (`'`) o dobles (`"`):

var stringPrimitivo = "Hola, soy un string primitivo.";


//Los strings primitivos son inmutables, lo que significa que no se pueden modificar directamente. 
//Cualquier operación que parezca modificar el string en realidad crea un nuevo string. Por ejemplo:

var original = "Hola";
var modificado = original.toUpperCase();

console.log(original);    // "Hola"
console.log(modificado);  // "HOLA"


//En este caso, `toUpperCase()` no modifica directamente el string original, sino que devuelve un nuevo string en mayúsculas.

//Strings Objeto:

//JavaScript también permite trabajar con strings como objetos utilizando el constructor `String()`. 
//Sin embargo, usar el objeto `String` no es tan común y generalmente no es necesario:

var stringObjeto = new String("Hola, soy un string objeto.");


//Aunque puedes realizar operaciones y acceder a métodos con un string objeto, generalmente es más práctico 
//y eficiente utilizar strings primitivos. JavaScript automáticamente convierte strings primitivos a objetos
// (y viceversa) cuando es necesario.

var stringPrimitivo = "Hola";
var stringObjeto = new String("Hola");

console.log(typeof stringPrimitivo);  // "string"
console.log(typeof stringObjeto);     // "object"


//En la mayoría de los casos, trabajar con strings primitivos es preferible debido a su simplicidad y 
//mejor rendimiento. JavaScript proporciona métodos y propiedades que puedes utilizar directamente en 
//strings primitivos sin necesidad de crear un objeto `String`.

//Para acceder a caracteres individuales dentro de una cadena en JavaScript, puedes utilizar la notación de 
//corchetes `[]`. Ten en cuenta que los índices en JavaScript comienzan desde cero. Aquí hay algunos ejemplos:

// Acceder a un Carácter por Índice:


var palabra = "JavaScript";
var primerCaracter = palabra[0];
var tercerCaracter = palabra[2];

console.log(primerCaracter); // Salida: "J"
console.log(tercerCaracter); // Salida: "v"


// Modificar un Carácter (ten en cuenta que las cadenas son inmutables):


var palabra = "Hola";
// Intentar modificar un carácter generará un error
palabra[0] = "C"; // Esto no funcionará

// Deberías crear una nueva cadena para realizar modificaciones
var nuevaPalabra = "C" + palabra.slice(1);
console.log(nuevaPalabra); // Salida: "Cola"


//Iterar sobre Caracteres:

//Puedes utilizar un bucle para iterar sobre cada carácter de una cadena:


var palabra = "JavaScript";

for (var i = 0; i < palabra.length; i++) {
  console.log(palabra[i]);
}
// Salida:
// J
// a
// v
// a
// S
// c
// r
// i
// p
// t


//Métodos para Trabajar con Caracteres:

//JavaScript también proporciona métodos que trabajan con caracteres, como `charAt()` y `charCodeAt()`:


var palabra = "Hola";
console.log(palabra.charAt(0));      // Salida: "H"
console.log(palabra.charCodeAt(0));  // Salida: 72 (valor ASCII de "H")


//Recuerda que las cadenas en JavaScript son inmutables, lo que significa que no puedes modificar directamente 
//un carácter existente en una cadena. Debes crear una nueva cadena si necesitas realizar cambios.
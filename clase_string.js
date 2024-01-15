/*

En JavaScript, hay varias formas de concatenar strings (unir cadenas de texto). 
Aquí te presento algunas opciones:

Operador +:
Puedes usar el operador + para concatenar dos o más strings: */

var str1 = "Hola";
var str2 = " mundo";
var resultado = str1 + str2;
console.log(resultado); // Salida: "Hola mundo"

/*
2. Template literals:
Los template literals, introducidos en ECMAScript 6, proporcionan una forma más legible de concatenar strings:
*/

let nombre = "Marta";
let edad = 29;

let mensaje = `Hola, mi nombre es ${nombre} y tengo ${edad} años.`;

console.log(mensaje);
// Salida: "Hola, mi nombre es Marta y tengo 29 años."

let a = 5;
let b = 10;

let resultado_suma = `La suma de ${a} y ${b} es ${a + b}.`;

console.log(resultado_suma);
// Salida: "La suma de 5 y 10 es 15."

/*Array join():
Si tienes varias cadenas almacenadas en un array, puedes usar el método join() para concatenarlas:
*/
var palabras = ["Hola", "mundo", "en", "JavaScript"];
var resultado = palabras.join(' ');
console.log(resultado);
// Salida: "Hola mundo en JavaScript"

var frutas = ["manzana", "plátano", "uva"];
var listaDeFrutas = frutas.join(', ');
console.log(listaDeFrutas);
// Salida: "manzana, plátano, uva"

var letras = ['a', 'b', 'c', 'd'];
var cadena = letras.join('-');
console.log(cadena);
// Salida: "a-b-c-d"

//Concat 

var str1 = "Hola";
var str2 = " mundo";
var resultado = str1.concat(str2);
console.log(resultado);
// Salida: "Hola mundo"

var str1 = "Hola";
var str2 = " ";
var str3 = "Marta";
var resultado = str1.concat(str2, str3);
console.log(resultado);
// Salida: "Hola Marta"

var str = "Hola";
var array = [1, 2, 3];
var resultado = str.concat(" ", array);
console.log(resultado);
// Salida: "Hola 1,2,3"

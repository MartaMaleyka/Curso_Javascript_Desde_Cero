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

//Los caracteres de escape son secuencias especiales de caracteres que se utilizan para representar caracteres que 
//de otra manera serían difíciles o imposibles de incluir directamente en una cadena de texto. 
//En JavaScript, algunos de los caracteres de escape más comunes son:

//1. `\n`: Salto de línea.

    console.log("Hola\nmundo");
   // Salida:
   // Hola
   // mundo


//2. `\t`: Tabulación.
   
    console.log("Hola\tmundo");
   // Salida: Hola    mundo
   

//3. `\r`: Retorno de carro (vuelve al inicio de la línea).
   
   console.log("Hola\rMundo");
    Salida: Mundo
   

//4. `\\`: Barra invertida (backslash).

   console.log("Este es un directorio: C:\\Usuarios\\Usuario");
   // Salida: Este es un directorio: C:\Usuarios\Usuario


//5. `\"` y `\'`: Comilla doble y comilla simple.
 
   console.log("Texto con una \"comilla\" y otra 'comilla'.");
   // Salida: Texto con una "comilla" y otra 'comilla'.
   

//6. `\b`: Retroceso (borra un carácter hacia atrás).
  
   console.log("Hola\bMundo");
   // Salida: HolMundo
   

//7. `\uXXXX`: Notación Unicode para representar caracteres especiales mediante su código hexadecimal.
  
   console.log("\u03A9 es el símbolo de Omega.");
   // Salida: Ω es el símbolo de Omega.

/*
   Estos son solo algunos ejemplos de caracteres de escape en JavaScript. 
Son útiles para manejar situaciones donde necesitas incluir caracteres especiales dentro de tus cadenas de texto.
*/
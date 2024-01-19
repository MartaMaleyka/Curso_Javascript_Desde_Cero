/*En JavaScript, la conversión de tipos de datos puede ocurrir de manera explícita o implícita. 
La conversión explícita se realiza deliberadamente por el programador, mientras que la conversión 
implícita ocurre automáticamente durante la ejecución del código. Aquí te doy ejemplos de ambas:
*/

//Conversión Explícita:

// 1. String a Number:

let cadena = "123";
let numero = Number(cadena);

console.log(numero); // Resultado: 123
console.log(typeof numero); // Resultado: number

// 2. Number a String:

let numero2 = 123;
let cadena2 = String(numero2);

console.log(cadena2); // Resultado: "123"
console.log(typeof cadena2); // Resultado: string

// Conversión Implícita:

// 1. Concatenación de String y Number:


let cadena3 = "Hola";
let numero3 = 42;
let resultado = cadena3 + numero3;

console.log(resultado); // Resultado: "Hola42"


//En este caso, JavaScript convierte implícitamente el número a una cadena y realiza la concatenación.

//2. Operaciones Numéricas con String:

let cadena4 = "5";
let numero4 = 10;
let resultado2 = cadena4 * numero4;

console.log(resultado2); // Resultado: 50

//Booleanos

//El operador de igualdad (==) realiza una conversión implícita antes de la comparación, mientras que el operador 
//de igualdad estricta (===) no realiza conversión de tipos y verifica tanto el valor como el tipo.

let a = 5;
let b = "5";

if (a == b) {
  console.log("Son iguales en valor.");
} else {
  console.log("No son iguales en valor.");
}

if (a === b) {
  console.log("Son iguales en valor y tipo.");
} else {
  console.log("No son iguales en valor y tipo.");
}


/*
JavaScript realiza una conversión implícita de la cadena a un número durante la operación matemática.

Es importante tener en cuenta que las conversiones implícitas pueden llevar a resultados inesperados, 
por lo que es recomendable ser consciente de cómo JavaScript maneja estos casos. En general, la conversión
explícita suele ser más segura y clara en términos de intenciones del código.
*/
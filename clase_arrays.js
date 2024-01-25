//Cómo crear un Array en JavaScript:**

//1. Utilizando `new Array()` o `Array()`


// Crear un Array usando new Array() o Array()
const frutas = Array('manzana', 'plátano', 'naranja');
console.log(frutas); // Imprime: ['manzana', 'plátano', 'naranja']

const soloUnNumeroU = Array(12);
console.log(soloUnNumeroU); // Imprime: [undefined, undefined, ..., undefined] (un array con 12 elementos undefined)

const numeros = Array(1, 2, 3, 4, 5);
console.log(numeros); // Imprime: [1, 2, 3, 4, 5]


/*
En este método, `Array()` se utiliza para crear un array. Puedes pasar elementos como argumentos, y también 
puedes especificar la longitud del array. Ten en cuenta que si solo proporcionas un número como argumento, 
se interpretará como la longitud del array.
*/
// 2. Utilizando la sintaxis literal del Array


// Crear un Array utilizando la sintaxis literal del Array
const soloUnNumero = [4];
console.log(soloUnNumero); // Imprime: [4]

const arrayVacio = [];
console.log(arrayVacio); // Imprime: []

const deportes = ['fútbol', 'tenis', 'rugby'];
console.log(deportes); // Imprime: ['fútbol', 'tenis', 'rugby']

const ingredientesReceta = [
  'Harina',
  true,
  2,
  {
    ingrediente: 'Leche', cantidad: '1 taza'
  },
  false
];
console.log(ingredientesReceta); // Imprime: ['Harina', true, 2, { ingrediente: 'Leche', cantidad: '1 taza' }, false]


/*
La sintaxis literal del Array (`[]`) es una forma más común y legible de crear arrays. Puedes proporcionar 
elementos directamente dentro de corchetes, y estos elementos pueden ser de diferentes tipos.
*/


//Accediendo a elementos del Array:
// Acceder a elementos del Array
const primeraFruta = frutas[0];
console.log(primeraFruta); // Imprime: 'manzana'


/*
Puedes acceder a elementos de un array utilizando la notación de corchetes y proporcionando el índice del 
elemento que deseas obtener. Los índices comienzan desde 0.
*/


//Propiedad `length`:

// Propiedad length
const cantidadFrutas = frutas.length;
console.log(cantidadFrutas); // Imprime: 3 (longitud del array)


/*
La propiedad `length` te da la cantidad de elementos en un array.
*/

// Mutabilidad e Inmutabilidad:


// Mutabilidad
frutas.push('sandía');
console.log(frutas); // Imprime: ['manzana', 'plátano', 'naranja', 'sandía']

// Inmutabilidad
const nuevasFrutas = frutas.concat(['uva', 'kiwi']);
console.log(frutas); // Imprime: ['manzana', 'plátano', 'naranja', 'sandía']
console.log(nuevasFrutas); // Imprime: ['manzana', 'plátano', 'naranja', 'sandía', 'uva', 'kiwi']


/*
La mutabilidad implica cambiar el contenido del array original, mientras que la inmutabilidad crea un nuevo 
array sin modificar el original.
*/


// Verificar si es un Array con Array.isArray()
const esArray = Array.isArray(frutas);
console.log(esArray); // Imprime: true


/*
La función `Array.isArray()` verifica si un objeto es un array.
*/

//Ejercicio práctico: Sumar todos los elementos de un Array.


const arrayNumeros = [1, 2, 3, 4, 5];
let suma = 0;

for (let i = 0; i < arrayNumeros.length; i++) {
  suma += arrayNumeros[i];
}

console.log(suma); // Imprime: 15 (1 + 2 + 3 + 4 + 5)


/*
Este ejercicio utiliza un bucle `for` para sumar todos los elementos de un array. La variable `suma` se 
actualiza en cada iteración del bucle, y al final, muestra la suma total de los elementos del array.*/
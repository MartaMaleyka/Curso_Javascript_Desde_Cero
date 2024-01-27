/* 1. Copiar una matriz */
const originalArray = [1, 2, 3, 4, 5];
const copiaDeLaMatriz = [...originalArray];
// Usamos el operador de propagación (...) para crear una copia de la matriz original.
// Esto asegura que `copiaDeLaMatriz` sea una nueva matriz independiente de `originalArray`.

console.log("Matriz Original:", originalArray);
console.log("Copia de la Matriz:", copiaDeLaMatriz);

/* 2. Combinar Matrices */
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const matrizCombinada = [...array1, ...array2];
// Usamos el operador de propagación (...) para combinar las dos matrices `array1` y `array2` en una sola matriz `matrizCombinada`.

console.log("Matriz 1:", array1);
console.log("Matriz 2:", array2);
console.log("Matriz Combinada:", matrizCombinada);

/* 3. Crear Matrices con Elementos Adicionales */
const baseArray = [1, 2, 3];
const matrizConElementosAdicionales = [...baseArray, 4, 5, 6];
// Usamos el operador de propagación (...) para crear una nueva matriz que incluye los elementos de `baseArray` junto con elementos adicionales.

console.log("Matriz Base:", baseArray);
console.log("Matriz con Elementos Adicionales:", matrizConElementosAdicionales);

/* 4. Pasar Elementos a Funciones */
function sumar(a, b, c) {
  return a + b + c;
}

const numeros = [1, 2, 3];
const resultado = sumar(...numeros);
// Usamos el operador de propagación (...) para pasar los elementos de la matriz `numeros` como argumentos individuales a la función `sumar()`.

console.log("Resultado de la Suma:", resultado);

// Definición de un array unidimensional
let array1D = [1, 2, 3];
/* 
   Un array unidimensional es una colección de elementos organizados en una sola dimensión.
   En este caso, `array1D` contiene los elementos [1, 2, 3].
*/

// Definición de un array bidimensional
let array2D = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
/* 
   Un array bidimensional es una matriz que contiene otras matrices como elementos.
   En este caso, `array2D` es una matriz de 3x3 con los valores:
   [
     [1, 2, 3],
     [4, 5, 6],
     [7, 8, 9]
   ]
*/

// Modificar un valor en la matriz
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
matrix[1][2] = 10;
console.log(matrix); // Output: [[1, 2, 3], [4, 5, 10], [7, 8, 9]]
/* 
   Podemos modificar un valor específico en la matriz accediendo a su posición.
   En este caso, estamos cambiando el valor en la fila 2, columna 3 (índices 1 y 2) de 6 a 10.
*/

// Acceder a un valor en la matriz
let value = matrix[0][1];
console.log(value); // Output: 2
/* 
   Podemos acceder a un valor específico en la matriz utilizando sus índices.
   En este caso, estamos obteniendo el valor en la fila 1, columna 2 de la matriz, que es 2.
*/

// Operaciones en la matriz
for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    console.log(matrix[i][j]);
  }
}
/* 
   Podemos realizar operaciones en todos los elementos de la matriz utilizando bucles anidados.
   En este caso, estamos recorriendo cada elemento de la matriz e imprimiéndolo en la consola.
*/

// Función para encontrar un elemento en la matriz
function findElement(matrix, element) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === element) {
        return true;
      }
    }
  }
  return false;
}

console.log(findElement(matrix, 5)); // Output: true
/* 
   Podemos crear funciones para buscar un elemento específico en la matriz.
   En este caso, la función `findElement` busca el elemento dado en la matriz y devuelve true si se encuentra, de lo contrario, devuelve false.
*/

// Función para duplicar una matriz
function duplicateMatrix(matrix) {
  let newMatrix = [];
  for (let i = 0; i < matrix.length; i++) {
    // Usamos el operador de propagación (...) para crear una copia de cada fila de la matriz
    newMatrix[i] = [...matrix[i]];
  }
  return newMatrix;
}

console.log(duplicateMatrix(matrix)); // Output: [[1, 2, 3], [4, 5, 10], [7, 8, 9]]
/* 
   Podemos crear funciones para duplicar una matriz.
   En este caso, la función `duplicateMatrix` crea una nueva matriz que es una copia exacta de la matriz original.
   Utilizamos el operador de propagación (...) para copiar cada fila de la matriz original en la nueva matriz.
*/

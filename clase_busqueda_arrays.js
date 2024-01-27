// Definición de una matriz de números
const numbers = [1, 2, 3, 4, 5];

// Método includes(): Verifica si un elemento está presente en la matriz
const result1 = numbers.includes(3);
console.log(result1); // Output: true

const result2 = numbers.includes(8);
console.log(result2); // Output: false

// Definición de una matriz de frutas
const fruits = ['apple', 'cherry', 'grape', 'mango'];

// Método indexOf(): Devuelve el índice de la primera ocurrencia de un elemento
const index1 = fruits.indexOf('grape');
console.log(index1); // Output: 2

const index2 = fruits.indexOf('blueberry');
console.log(index2); // Output: -1 (El elemento no está presente)

// Definición de una matriz de números nuevamente
const numbersAgain = [2, 4, 6, 8, 10, 6];

// Método lastIndexOf(): Devuelve el índice de la última ocurrencia de un elemento
const lastIndex1 = numbersAgain.lastIndexOf(6);
console.log(lastIndex1); // Output: 5

const lastIndex2 = numbersAgain.lastIndexOf(3);
console.log(lastIndex2); // Output: -1 (El elemento no está presente)

// Definición de una matriz de cadenas de texto
const stringArray = ['apple', 'banana', 'orange', 'grape', 'banana', 'kiwi'];
const target = 'banana';

// Función findStringIndicesInArray(): Encuentra los índices de la primera y última ocurrencia de un elemento en la matriz
function findStringIndicesInArray(array, target) {
  const result = {
    includesTargetString: false,
    firstOccurrenceIndex: -1,
    lastOccurrenceIndex: -1
  };

  array.forEach((element, index) => {
    if (element === target) {
      if (!result.includesTargetString) {
        result.includesTargetString = true;
        result.firstOccurrenceIndex = index;
      }
      result.lastOccurrenceIndex = index;
    }
  });

  return result;
}

const result = findStringIndicesInArray(stringArray, target);
console.log(result); // Output: { includesTargetString: true, firstOccurrenceIndex: 1, lastOccurrenceIndex: 4 }

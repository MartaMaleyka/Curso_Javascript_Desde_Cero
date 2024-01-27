// Definición de una matriz de animales
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

// Método slice(): Extrae una porción de una matriz sin modificar la original

// Ejemplo 1: slice() sin segundo parámetro devuelve una porción desde el índice proporcionado hasta el final de la matriz
console.log(animals.slice(2)); // Output: ['camel', 'duck', 'elephant']

// Ejemplo 2: slice() con dos parámetros devuelve una porción desde el índice inicial hasta el índice final (no inclusivo)
console.log(animals.slice(2, 4)); // Output: ['camel', 'duck']

// Ejemplo 3: slice() con un índice inicial mayor que la longitud de la matriz devuelve una matriz vacía
console.log(animals.slice(1, 6)); // Output: ['bison', 'camel', 'duck', 'elephant']

// Ejemplo 4: slice() con un índice negativo devuelve una porción desde el índice negativo hasta el final de la matriz
console.log(animals.slice(-2)); // Output: ['duck', 'elephant']

// Ejemplo 5: slice() con un índice negativo como segundo parámetro devuelve una porción desde el índice proporcionado hasta el índice negativo (no inclusivo)
console.log(animals.slice(2, -1)); // Output: ['camel', 'duck']

// Ejemplo 6: slice() sin parámetros devuelve una copia superficial de la matriz original
console.log(animals.slice()); // Output: ['ant', 'bison', 'camel', 'duck', 'elephant']

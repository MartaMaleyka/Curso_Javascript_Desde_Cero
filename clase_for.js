// Descripción:
// El bucle for permite ejecutar un bloque de código repetidamente mientras se cumple una condición.

// Usos Comunes:
// - Iterar sobre un rango de valores.
// - Recorrer elementos de un array.
// - Contar y acumular.

// Ejemplo: Imprimir los números del 1 al 5 usando un bucle for

// Inicialización: establecemos el contador en 1
// Condición: mientras el contador sea menor o igual a 5
// Incremento: incrementamos el contador en 1 después de cada iteración
for (let i = 1; i <= 5; i++) {
    console.log(i); // Imprime el valor actual del contador en cada iteración
}

// Ejemplo: Calcular el promedio de un array de números

// Array de números
let numeros = [15, 22, 34, 18, 25];

// Inicialización: establecemos la variable suma en 0
// Condición: mientras el índice sea menor que la longitud del array
// Incremento: incrementamos el índice en 1 después de cada iteración
let suma = 0;
for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i]; // Acumula el valor actual del array en la variable suma
}

// Calculamos el promedio dividiendo la suma por la cantidad de elementos
let promedio = suma / numeros.length;

// Imprimimos el resultado
console.log("Array de números:", numeros);
console.log("Suma:", suma);
console.log("Promedio:", promedio);
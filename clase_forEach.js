// Descripción:
// El método forEach es una forma de recorrer los elementos de un array y aplicar una función a cada uno.

// Usos Comunes:
// - Iterar sobre un array sin la necesidad de un índice.
// - Realizar operaciones en cada elemento del array.

// Ejemplo: Imprimir el cuadrado de cada número en un array usando forEach

// Array de números
let numeros = [2, 5, 8, 10, 3];

// Utilizamos el método forEach para recorrer cada elemento del array
numeros.forEach(function(numero) {
    let cuadrado = numero * numero; // Calcula el cuadrado del número actual
    console.log(`El cuadrado de ${numero} es: ${cuadrado}`);
});

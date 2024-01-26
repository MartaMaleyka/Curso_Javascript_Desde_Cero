// Ejemplo de uso de los métodos map() y forEach() en JavaScript

// Array de números
let numeros = [1, 2, 3, 4, 5];

// Método map(): Itera sobre cada elemento del array y devuelve un nuevo array con los resultados de la función 
//de retorno de llamada aplicada a cada elemento.
let numerosDuplicados = numeros.map(numero => numero * 3);
console.log("Array después de triplicar cada elemento con map():", numerosDuplicados);

// Método forEach(): Itera sobre cada elemento del array y ejecuta una función de retorno de llamada una vez por 
//cada elemento en orden ascendente.
numeros.forEach(numero => console.log(numero));

/*
Explicación:

- El método `map()` itera sobre cada elemento del array y devuelve un nuevo array con los resultados de la función de
retorno de llamada aplicada a cada elemento. En este ejemplo, se utiliza para duplicar cada número en el array 
`numeros`.

- El método `forEach()` ejecuta una función de retorno de llamada una vez por cada elemento en el array en orden 
ascendente. En este ejemplo, se utiliza para imprimir cada número en el array `numeros` en la consola.

Ambos métodos son útiles para realizar iteraciones sobre arrays en JavaScript, pero tienen diferencias importantes:

- `map()` devuelve un nuevo array con los resultados de la función de retorno de llamada aplicada a cada elemento del
array original, mientras que `forEach()` simplemente itera sobre cada elemento del array sin modificar el array 
original.

- `map()` es útil cuando se desea transformar cada elemento del array en otro valor y obtener un nuevo array con los 
resultados, mientras que `forEach()` es útil cuando se desea ejecutar una función para cada elemento del array 
sin necesariamente devolver un nuevo array.
*/
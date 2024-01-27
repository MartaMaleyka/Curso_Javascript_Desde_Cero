
// Array de números
let numeros = [1, 2, 3, 4, 5];

// Método filter(): Filtra elementos del array basados en una condición especificada en una función de retorno de llamada.
let numerosPares = numeros.filter(numero => numero % 2 === 0);
console.log("Elementos pares del array usando filter():", numerosPares);

// Método reduce(): Reduce el array a un solo valor aplicando una función de retorno de llamada a cada elemento del array.
let sumaNumeros = numeros.reduce((acumulador, numero) => acumulador + numero, 0);
console.log("Suma de todos los elementos del array usando reduce():", sumaNumeros);

/*
Explicación:

- El método `filter()` itera sobre cada elemento del array y devuelve un nuevo array que contiene solo los elementos 
para los cuales la función de retorno de llamada devuelve `true`. En este ejemplo, se utiliza para filtrar los 
números pares del array `numeros`.

- El método `reduce()` aplica una función de retorno de llamada a cada elemento del array, acumulando un solo valor 
resultante. El valor acumulador se pasa a la función de retorno de llamada en cada iteración, junto con el elemento 
actual del array. En este ejemplo, se utiliza para calcular la suma de todos los elementos del array `numeros`.

Ambos métodos son útiles para manipular arrays en JavaScript:

- `filter()` es útil cuando se desea crear un nuevo array con elementos filtrados basados en una condición específica.

- `reduce()` es útil cuando se desea reducir el array a un solo valor acumulando resultados basados en una 
función específica.
*/
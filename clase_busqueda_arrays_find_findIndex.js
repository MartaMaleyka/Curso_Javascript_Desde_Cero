// Buscar el primer número mayor que 5 utilizando find()
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const firstNumberGreaterThanFive = numbers.find(number => number > 5);
console.log("Array original:", numbers);
console.log("Primer número mayor que 5 encontrado con find():", firstNumberGreaterThanFive);

// Buscar el índice del primer número mayor que 5 utilizando findIndex()
const firstIndexGreaterThanFive = numbers.findIndex(number => number > 5);
console.log("Índice del primer número mayor que 5 encontrado con findIndex():", firstIndexGreaterThanFive);

/*Explicacion
El método find() se utiliza para encontrar el primer elemento en el array que cumple con la condición 
especificada en la función de retorno de llamada. En este ejemplo, se busca el primer número mayor que 
5 en el array numbers.

El método findIndex() se utiliza para encontrar el índice del primer elemento en el array que cumple con 
la condición especificada en la función de retorno de llamada. En este ejemplo, se busca el índice del 
primer número mayor que 5 en el array numbers.

Ambos métodos son útiles para realizar búsquedas en arrays en JavaScript:

find() devuelve el primer elemento que cumple con la condición, mientras que findIndex() 
devuelve el índice del primer elemento que cumple con la condición.

Si no se encuentra ningún elemento que cumpla con la condición, find() devuelve undefined, y findIndex() devuelve -1.

Estos métodos son útiles cuando necesitas encontrar un elemento o su índice en un array basado en ciertas condiciones.
*/
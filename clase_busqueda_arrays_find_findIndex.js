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



/*El código que proporcionaste define algunas funciones para buscar información sobre los participantes 
ganadores en un concurso basado en su nombre o número de boleto. Aquí está el análisis del código:
*/

// Array de participantes ganadores con su información
const winningParticipants = [
    { id: 1, name: 'Jennifer', ticketNumber: 1 },
    { id: 8, name: 'Michael', ticketNumber: 8 },
    { id: 15, name: 'Emily', ticketNumber: 15 },
    { id: 47, name: 'Charlie', ticketNumber: 47 }
];

// Función para encontrar al ganador por nombre
function findWinnerByName(name) {
    const winner = winningParticipants.find(participant => participant.name === name);
    return winner || 'No winner found with that name.';
}

// Función para encontrar el índice del ganador por número de boleto
function findIndexWinnerByTicket(ticketNumber) {
    const index = winningParticipants.findIndex(participant => participant.ticketNumber === ticketNumber);
    return index !== -1 ? index : 'No winner found with that ticket number.';
}

// Función para mostrar la información del ganador
function displayWinnerInformation(winner) {
    if (winner !== undefined && winner !== null && winner !== 'No winner found with that name.') {
        console.log('Winner information: ', winner);
    } else {
        console.log('No winner found.');
    }
}

// Encontrar al ganador por nombre ('Emily')
const winnerByName = findWinnerByName('Emily');

// Encontrar el índice del ganador por número de boleto (008)
const indexWinnerByTicket = findIndexWinnerByTicket(8);

// Mostrar la información del ganador por nombre
displayWinnerInformation(winnerByName);

// Mostrar el índice del ganador por número de boleto
console.log('Index of Winner by Ticket Number: ', indexWinnerByTicket);

/*En resumen, el código realiza las siguientes operaciones:

1. Define un array de participantes ganadores con su información.
2. Define funciones para encontrar al ganador por nombre (`findWinnerByName`) y por número de boleto (`findIndexWinnerByTicket`).
3. Define una función para mostrar la información del ganador (`displayWinnerInformation`).
4. Utiliza las funciones definidas para buscar la información del ganador por nombre ('Emily') y por número de boleto (008).
5. Muestra la información del ganador por nombre y el índice del ganador por número de boleto en la consola.

El código demuestra cómo utilizar los métodos `find()` y `findIndex()` para buscar información específica dentro de un array de objetos en JavaScript.
*/
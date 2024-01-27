// Definición de una matriz de edades
const ages = [21, 25, 30, 19, 22];

// Método every(): Verifica si todos los elementos cumplen una condición
const allAreAdults = ages.every(age => age > 20);
/*
El método every() verifica si todos los elementos de la matriz cumplen con la condición proporcionada. 
En este caso, comprueba si todos los elementos son mayores de 20 años.
*/

// Impresión de la matriz de edades y el resultado de la comprobación
console.log("Edades:", ages);
console.log("¿Todos son adultos?", allAreAdults);

// Método some(): Verifica si al menos un elemento cumple una condición
const atLeastOneIsOver30 = ages.some(age => age > 30);
/*
El método some() verifica si al menos un elemento de la matriz cumple con la condición proporcionada. 
En este caso, comprueba si al menos un elemento es mayor de 30 años.
*/

// Impresión de la matriz de edades y el resultado de la comprobación
console.log("Edades:", ages);
console.log("¿Al menos uno es mayor de 30 años?", atLeastOneIsOver30);


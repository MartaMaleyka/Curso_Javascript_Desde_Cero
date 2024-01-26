// Crear un array inicial
let miArray = ['Manzana', 'Plátano', 'Naranja'];
console.log("Array inicial:", miArray);

// Método shift(): Elimina el primer elemento del array y devuelve ese elemento
let primerElementoEliminado = miArray.shift();
console.log("Primer elemento eliminado con shift():", primerElementoEliminado);
console.log("Array después de eliminar el primer elemento con shift():", miArray);

// Método unshift(): Agrega uno o más elementos al principio del array y devuelve la nueva longitud del array
let nuevaLongitud = miArray.unshift('Sandía', 'Melón');
console.log("Nueva longitud del array después de agregar elementos con unshift():", nuevaLongitud);
console.log("Array después de agregar elementos con unshift():", miArray);

/*
Explicación:

El método shift() elimina el primer elemento del array y devuelve ese elemento. En este ejemplo, 'Manzana' es el 
primer elemento de miArray, por lo que es eliminado y almacenado en la variable primerElementoEliminado.

El método unshift() agrega uno o más elementos al principio del array y devuelve la nueva longitud del array. En este 
ejemplo, 'Sandía' y 'Melón' se agregan al principio de miArray.
*/
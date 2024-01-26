// Crear un array inicial
let miArray = ['Manzana', 'Plátano', 'Naranja', 'Fresa', 'Kiwi'];
console.log("Array inicial:", miArray);

// Método splice(): Elimina elementos existentes y/o agrega nuevos elementos en su lugar
let elementosEliminados = miArray.splice(2, 2, 'Sandía', 'Melón');
console.log("Elementos eliminados con splice():", elementosEliminados);
console.log("Array después de usar splice() para reemplazar elementos:", miArray);

// Método reverse(): Invierte el orden de los elementos en el array
miArray.reverse();
console.log("Array después de invertir su orden con reverse():", miArray);

// Método sort(): Ordena los elementos del array (en este caso, alfabéticamente)
miArray.sort();
console.log("Array después de ordenar alfabéticamente con sort():", miArray);

// Método fill(): Rellena todos los elementos del array con un valor estático
miArray.fill('Cereza');
console.log("Array después de rellenar con fill():", miArray);

// Ejemplos de bucles en JavaScript con comentarios explicativos

// Ejemplo de bucle 'for'
console.log("Ejemplo de bucle 'for':");
for (let i = 0; i < 5; i++) {
    console.log(i);
}
/*
  Descripción:
  El bucle 'for' se utiliza para iterar un número específico de veces.
  En este ejemplo, imprime los números del 0 al 4 en la consola.

  Usos comunes:
  - Iterar sobre un rango de valores conocido.
*/

// Ejemplo de bucle 'for...of'
console.log("\nEjemplo de bucle 'for...of':");
let colores = ["Rojo", "Verde", "Azul"];
for (let color of colores) {
    console.log(color);
}
/*
  Descripción:
  El bucle 'for...of' se utiliza para iterar sobre elementos de estructuras de datos iterables, como arrays.
  En este ejemplo, imprime cada color del array 'colores' en la consola.

  Usos comunes:
  - Iterar sobre elementos de un array.
*/

// Ejemplo de bucle 'for...in'
console.log("\nEjemplo de bucle 'for...in':");
let persona = { nombre: "Juan", edad: 25, ciudad: "Madrid" };
for (let clave in persona) {
    console.log(clave + ": " + persona[clave]);
}
/*
  Descripción:
  El bucle 'for...in' se utiliza para iterar sobre las propiedades enumerables de un objeto.
  En este ejemplo, imprime cada propiedad y su valor en la consola.

  Usos comunes:
  - Iterar sobre propiedades de un objeto.
*/


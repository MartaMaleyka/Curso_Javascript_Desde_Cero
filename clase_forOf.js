// Ejemplo de bucle for...of en JavaScript

// Creamos un array como ejemplo
let colores = ["Rojo", "Verde", "Azul"];

/*
  Utilizamos el bucle for...of para iterar sobre cada elemento del array 'colores'.
  En cada iteración, la variable 'color' tomará el valor del elemento actual.
*/
for (let color of colores) {
    console.log(color); // Imprime el valor actual del elemento en cada iteración
}

/*
  Descripción:
  El bucle for...of simplifica la iteración sobre elementos de una colección, como arrays o cadenas de texto.

  Usos comunes:
  - Iterar sobre elementos de un array.
  - Recorrer caracteres de una cadena de texto.
  - Trabajar con cualquier objeto iterable en JavaScript.

  Nota: No es necesario especificar una condición de salida o un incremento/decremento en el bucle for...of.
*/

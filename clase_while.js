// Ejemplo de bucle 'while' en JavaScript

// Inicializamos una variable de contador
let contador = 0;

// Ejemplo de bucle 'while': imprime los números del 0 al 4
console.log("Ejemplo de bucle 'while':");
while (contador < 5) {
    console.log(contador);
    contador++;
}
/*
  Descripción:
  Lo usamos para poder meter instrucciones en un ciclo y se vaya repitiendo siempre y cuando se cumpla 
  la condición que tenemos en él. Es importante comprenderlo y saber utilizarlo, de no hacerlo bien podemos
  generar bucles infinitos que harán colapsar al navegador.
  El bucle 'while' se utiliza para ejecutar un bloque de código mientras una condición sea verdadera.
  En este ejemplo, imprime los números del 0 al 4 en la consola.

  Usos comunes:
  - Iterar mientras se cumple una condición.
*/

// Ejemplo de bucle 'while' con entrada del usuario
console.log("\nEjemplo de bucle 'while' con entrada del usuario:");
let respuesta = "";
while (respuesta !== "salir") {
    respuesta = prompt("Escribe 'salir' para terminar:");
}
/*
  Descripción:
  Otro ejemplo de bucle 'while' que continúa hasta que el usuario ingresa la palabra "salir".
  Utiliza la función prompt para obtener la entrada del usuario.

  Usos comunes:
  - Iterar hasta que se cumpla una condición específica, que puede ser determinada por entrada del usuario u otras interacciones.
*/

// Ejemplo de bucle 'while' en JavaScript

// Inicializamos una variable y un array
let index = 0;
let frutas = ["Manzana", "Banana", "Uva", "Kiwi"];

// Ejemplo de bucle 'while': imprime las frutas hasta que encuentra "Uva"
console.log("Ejemplo de bucle 'while' con array:");
while (frutas[index] !== "Uva" && index < frutas.length) {
    console.log(frutas[index]);
    index++;
}
/*
  Descripción:
  Este ejemplo utiliza un bucle 'while' para imprimir las frutas del array hasta que encuentra la fruta "Uva".
  La condición de salida del bucle es que la fruta actual sea "Uva" o que se alcance el final del array.
*/

// Ejemplo de bucle 'while' inverso: imprime números del 5 al 1
console.log("\nEjemplo de bucle 'while' inverso:");
let numero = 5;
while (numero >= 1) {
    console.log(numero);
    numero--;
}
/*
  Descripción:
  Otro ejemplo que utiliza un bucle 'while' para imprimir números del 5 al 1 en orden inverso.

  Usos comunes:
  - Iterar en orden inverso.
*/

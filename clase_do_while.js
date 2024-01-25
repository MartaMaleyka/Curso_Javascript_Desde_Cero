// Ejemplo de bucle 'do...while' en JavaScript

// Inicializamos una variable
let contador = 0;

// Ejemplo de bucle 'do...while': imprime los números del 0 al 4
console.log("Ejemplo de bucle 'do...while':");
do {
    console.log(contador);
    contador++;
} while (contador < 5);
/*
  Descripción:
  El bucle 'do...while' es similar al 'while', pero la diferencia principal es que la condición se evalúa después de ejecutar el bloque de código.
  Esto significa que el bloque de código se ejecutará al menos una vez, incluso si la condición inicialmente es falsa.
  En este ejemplo, imprime los números del 0 al 4.

  Usos comunes:
  - Similar al 'while', pero útil cuando deseas garantizar que el bloque de código se ejecute al menos una vez.
*/

// Ejemplo de bucle 'do...while' con entrada del usuario
console.log("\nEjemplo de bucle 'do...while' con entrada del usuario:");
let respuesta;
do {
    respuesta = prompt("Escribe 'salir' para terminar:");
} while (respuesta !== "salir");
/*
  Descripción:
  Un ejemplo común del uso de 'do...while' es cuando necesitas recibir entrada del usuario al menos una vez.
  En este ejemplo, solicita al usuario que escriba 'salir' para terminar, pero el bloque de código se ejecuta al menos una vez.

  Diferencia con 'while':
  - En un bucle 'while', la condición se verifica antes de ejecutar el bloque de código, por lo que si la condición es falsa inicialmente, el bloque nunca se ejecutará.
  - En un bucle 'do...while', el bloque de código se ejecuta al menos una vez, incluso si la condición es falsa inicialmente.
*/

//Otro ejemplo
// Ejemplo más avanzado de bucle 'do...while' en JavaScript

// Inicializamos un array de números aleatorios
let numeros = [];
let suma = 0;

// Generamos 5 números aleatorios y los almacenamos en el array
do {
    let numeroAleatorio = Math.floor(Math.random() * 10) + 1; // Genera números del 1 al 10
    numeros.push(numeroAleatorio);
} while (numeros.length < 5);

// Imprimimos los números generados
console.log("Números generados:", numeros);

// Calculamos la suma de los números
let indice = 0;
do {
    suma += numeros[indice];
    indice++;
} while (indice < numeros.length);

// Imprimimos la suma
console.log("Suma de los números:", suma);

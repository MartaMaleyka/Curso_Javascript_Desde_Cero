// Función que toma un parámetro y modifica su valor
/*
En JavaScript, cuando se pasa un dato primitivo por valor a una función, 
se está pasando una copia del valor, y cualquier cambio realizado dentro 
de la función no afectará la variable original fuera de la función. Los datos 
primitivos en JavaScript son inmutables, lo que significa que no se pueden modificar directamente.
*/
function modificarValor(x) {
    x = 10; // Se modifica la copia local de 'x'
    console.log("Dentro de la función:", x);
  }
  
  // Variable original
  let numero = 5;
  
  // Llamada a la función
  modificarValor(numero);
  
  // La variable original no se ve afectada
  console.log("Fuera de la función:", numero);
  
  //Ejemplo 2
  // Función que toma un parámetro y modifica su valor
// Variable original
let a = 7;
console.log("Valor de 'a':", a);

// Se asigna el valor de 'a' a 'b' (paso por valor)
let b = a;
console.log("Valor de 'b':", b);

// Se modifica el valor de 'b'
b = 10;

// La variable original 'a' no se ve afectada
console.log("Valor de 'a':", a); // Salida: 7
console.log("Valor de 'b':", b); // Salida: 10

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



/*Paso por referencia
En JavaScript, cuando se trabaja con datos complejos como objetos y arreglos, el paso de argumentos a 
funciones implica pasar una referencia al objeto o arreglo, en lugar de una copia de su valor. 
Esto se conoce como "paso por referencia del valor". Aunque la referencia en sí misma se pasa por valor, 
significa que si se realiza una modificación en el objeto o arreglo dentro de la función, esos cambios se 
reflejarán fuera de la función, ya que ambas variables (la original y la recibida como parámetro) apuntan 
a la misma ubicación de memoria.

Aquí hay un ejemplo para ilustrar el paso por referencia en datos complejos en JavaScript:
*/

// Objeto original
let persona = {
  nombre: 'Juan',
  edad: 25
};

// Función que modifica el objeto
function modificarPersona(objeto) {
  objeto.edad = 30;
  objeto.profesion = 'Desarrollador';
}

// Llamada a la función
modificarPersona(persona);

// Los cambios realizados en la función se reflejan fuera de ella
console.log("Edad de la persona:", persona.edad); // Salida: 30
console.log("Profesión de la persona:", persona.profesion); // Salida: Desarrollador

/*
En este ejemplo, la función `modificarPersona` toma un objeto como parámetro y modifica sus propiedades. 
Estos cambios se reflejan en el objeto original `persona` fuera de la función. Esto es posible porque
se pasó una referencia al objeto y no una copia del mismo.


Otro ejemplo 
*/
// Array original
let numeros = [1, 2, 3, 4, 5];

// Se asigna la referencia del array a una nueva variable
let otroArray = numeros;

// Se modifica el nuevo array
otroArray.push(6);

// Los cambios se reflejan en el array original
console.log("Array original:", numeros); // Salida: [1, 2, 3, 4, 5, 6]
console.log("Nuevo array:", otroArray); // Salida: [1, 2, 3, 4, 5, 6]


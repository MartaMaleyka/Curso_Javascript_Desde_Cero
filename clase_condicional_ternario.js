/*
El operador ternario es una forma concisa de escribir una expresión condicional en JavaScript. Permite 
evaluar una condición y devolver un valor diferente según si la condición es verdadera o falsa. 
*/

// Definimos una variable de ejemplo
let edad = 20;

/*
  Usamos el operador ternario para verificar si la edad es mayor o igual a 18.
  Si es verdadero, asignamos el mensaje "Eres mayor de edad"; de lo contrario, asignamos "Eres menor de edad".
  Finalmente, imprimimos el resultado en la consola.
*/
let mensajeEdad = (edad >= 18) ? "Eres mayor de edad" : "Eres menor de edad";
console.log(mensajeEdad);

// Definimos otra variable de ejemplo
let hora = 14;

/*
  Usamos el operador ternario para verificar si la hora es menor a 12.
  Si es verdadero, asignamos el mensaje "Buenos días"; de lo contrario, asignamos "Buenas tardes o noches".
  Finalmente, imprimimos el resultado en la consola.
*/
let mensajeHora = (hora < 12) ? "Buenos días" : "Buenas tardes o noches";
console.log(mensajeHora);

// Definimos una calificación como ejemplo
let calificacion = 85;

/*
  Usamos el operador ternario para asignar una letra según el rango de calificación.
  La estructura es similar a un bloque if/else, pero de forma más compacta.
  Finalmente, imprimimos el resultado en la consola.
*/
let letraCalificacion = (calificacion >= 90) ? "A" : (calificacion >= 80) ? "B" : (calificacion >= 70) ? "C" : "Reprobado";
console.log(letraCalificacion);

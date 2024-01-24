// Definimos una variable de ejemplo
let edad = 20;

// Usamos la estructura if para comprobar si la edad es mayor o igual a 18
if (edad >= 18) {
    console.log("Eres mayor de edad");
}

// Definimos otra variable de ejemplo
let hora = 14;

/*
  Usamos la estructura if/else para comprobar si la hora es menor a 12.
  Si es verdadero, se imprime "Buenos días", de lo contrario, se imprime "Buenas tardes o noches".
*/
if (hora < 12) {
    console.log("Buenos días");
} else {
    console.log("Buenas tardes o noches");
}

// Definimos una calificación como ejemplo
let calificacion = 85;

/*
  Utilizamos la estructura if/else if/else para asignar una letra según el rango de calificación.
  Cada bloque if/else if verifica una condición y se ejecuta el bloque correspondiente si es verdadero.
  Si ninguna de las condiciones anteriores es verdadera, se ejecuta el bloque else.
*/
if (calificacion >= 90) {
    console.log("A");
} else if (calificacion >= 80) {
    console.log("B");
} else if (calificacion >= 70) {
    console.log("C");
} else {
    console.log("Reprobado");
}

// Definimos una variable de ejemplo
let diaDeLaSemana = "Lunes";

/*
  Utilizamos la estructura switch para evaluar diferentes casos según el valor de la variable diaDeLaSemana.
  En cada case, comparamos el valor de la variable con un valor específico y ejecutamos el bloque de código correspondiente.
  Si ninguno de los cases coincide, se ejecuta el bloque de código en el default.
*/
switch (diaDeLaSemana) {
    case "Lunes":
        console.log("Comienzo de semana");
        break;
    case "Martes":
    case "Miércoles":
    case "Jueves":
        console.log("Días laborables");
        break;
    case "Viernes":
        console.log("¡Viernes! Fin de la semana laboral");
        break;
    case "Sábado":
    case "Domingo":
        console.log("Fin de semana");
        break;
    default:
        console.log("Día no válido");
}
/*
En este ejemplo:

El valor de la variable diaDeLaSemana se compara con diferentes casos.
Si diaDeLaSemana es "Lunes", se imprime "Comienzo de semana".
Si diaDeLaSemana es "Martes", "Miércoles" o "Jueves", se imprime "Días laborables".
Si diaDeLaSemana es "Viernes", se imprime "¡Viernes! Fin de la semana laboral".
Si diaDeLaSemana es "Sábado" o "Domingo", se imprime "Fin de semana".
Si diaDeLaSemana no coincide con ninguno de los casos anteriores, se ejecuta el bloque de código en el default, que imprime "Día no válido".

El uso de switch y case es especialmente útil cuando tienes múltiples casos que deben ser evaluados 
de manera similar, proporcionando una alternativa más legible y estructurada que múltiples bloques 
if/else if/else.
*/
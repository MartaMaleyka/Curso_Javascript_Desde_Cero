// Definición de dos matrices de códigos Morse
const morseCode1 = ['....', '---']; // H O
const morseCode2 = ['.-..', '.-']; // L A

// Método 1: Usando el método concat() para combinar las matrices sin modificar las originales
const morseCodeMessage = morseCode1.concat(morseCode2);
/*
El método concat() se utiliza para concatenar dos o más matrices creando una nueva matriz sin modificar las matrices originales.
*/

// Método 2: Usando el método concat() con un array vacío para combinar las matrices sin modificar las originales
const morseCodeMessage2 = [].concat(morseCode1, morseCode2);
/*
Al pasar un array vacío como el primer argumento del método concat(), se crea una nueva matriz sin modificar las matrices originales.
*/

// Método 3: Usando el operador Spread para combinar las matrices sin modificar las originales
function combineMorseMessages(morseCode1, morseCode2) {
  console.log([...morseCode1, ...morseCode2]);
}
combineMorseMessages(morseCode1, morseCode2);
/*
El operador Spread (...) se utiliza para expandir los elementos de las matrices en una nueva matriz sin modificar las originales.
*/

// Método 4: Usando el método join() para unir los elementos de la matriz en una cadena sin modificar las originales
const morseCodeMessageString = morseCodeMessage.join('');
/*
El método join() se utiliza para unir los elementos de una matriz en una sola cadena utilizando un separador especificado (en este caso, una cadena vacía '') sin modificar las matrices originales.
*/

// Impresión de los resultados en la consola
console.log("Morse Code 1:", morseCode1);
console.log("Morse Code 2:", morseCode2);
console.log("Morse Code Message:", morseCodeMessage);
console.log("Morse Code Message 2:", morseCodeMessage2);
console.log("Morse Code Message String:", morseCodeMessageString);

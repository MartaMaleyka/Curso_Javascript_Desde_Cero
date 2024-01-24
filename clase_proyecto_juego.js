// Genera un número aleatorio entre 1 y 10 (ambos incluidos).
const numeroSecreto = Math.floor(Math.random() * 10) + 1;

// Juego principal
let intentos = 0;

do {
    // Solicita al jugador que ingrese un número y maneja posibles errores de entrada.
    const numeroJugador = parseInt(prompt("Adivina el número secreto entre 1 y 10"));

    if (isNaN(numeroJugador) || numeroJugador < 1 || numeroJugador > 10) {
        console.log("Por favor, ingresa un número válido entre 1 y 10.");
    } else {
        // Compara los números y muestra el resultado.
        if (numeroJugador === numeroSecreto) {
            console.log("¡Adivinaste el número secreto!");
        } else {
            console.log(numeroJugador > numeroSecreto ? "El número secreto es menor." : "El número secreto es mayor.");
        }
        intentos++;
    }
} while (intentos < 3 && numeroJugador !== numeroSecreto);

// Imprime en la consola el número con el que jugó el usuario.
console.log(`Este es el número con el que jugaste: ${numeroJugador}`);

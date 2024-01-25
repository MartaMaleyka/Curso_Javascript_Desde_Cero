// Definimos la palabra oculta y el número de intentos disponibles
let palabraOculta = "javascript";
let intentos = 3;

// Función para verificar si la suposición del jugador es correcta
function verificarSuposicion(suposicion, palabraOculta) {
    // Convertimos ambas cadenas a minúsculas para hacer la comparación insensible a mayúsculas
    if (suposicion.toLowerCase() === palabraOculta) {
        return true; // La suposición es correcta
    }
    return false; // La suposición es incorrecta
}

// Función principal para jugar al juego "Adivina la palabra"
function jugarAdivinaLaPalabra() {
    alert("Bienvenido a jugar adivina la palabra oculta");
    alert("Tienes 3 intentos para adivinar la palabra");
    alert("-pista- la palabra oculta es un lenguaje de programación");

    // Bucle principal: mientras haya intentos disponibles
    while (intentos > 0) {
        // Solicitamos al jugador que haga una suposición
        let suposicion = prompt("Adivina la palabra: ");

        // Verificamos si la suposición es correcta utilizando la función verificarSuposicion
        if (verificarSuposicion(suposicion, palabraOculta)) {
            alert("¡Correcto! Has adivinado la palabra.");
            break; // Salimos del bucle ya que la palabra fue adivinada correctamente
        } else {
            // Si la suposición es incorrecta, reducimos el número de intentos
            intentos--;

            // Mostramos un mensaje indicando intentos restantes, si hay más intentos disponibles
            if (intentos > 0) {
                alert(`Incorrecto. Aún tienes ${intentos} intento(s) restante(s).`);
            } else {
                // Si se agotan los intentos, mostramos la palabra oculta y finalizamos el juego
                alert(`Agotaste tus intentos. La palabra oculta era ${palabraOculta}.`);
            }
        }
    }
}

// Llamamos a la función principal para iniciar el juego
jugarAdivinaLaPalabra();

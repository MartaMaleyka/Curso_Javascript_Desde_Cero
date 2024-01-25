// Función para mostrar la pila actual de libros
function mostrarPila(pila) {
    if (pila.length === 0) {
        console.log("La pila de libros está vacía.");
    } else {
        console.log("Pila de libros:");
        for (let i = pila.length - 1; i >= 0; i--) {
            console.log(pila[i]);
        }
    }
}

// Pila inicial de libros (vacía)
let pilaDeLibros = [];

// Ciclo principal para permitir a los usuarios interactuar con la pila
let continuar = true;
while (continuar) {
    console.log("\nAcciones disponibles:");
    console.log("1. Agregar un libro encima de la pila.");
    console.log("2. Quitar un libro de encima de la pila.");
    console.log("3. Mostrar la pila actual de libros.");
    console.log("4. Salir.");

    // Obtener la opción del usuario
    let opcion = parseInt(prompt("Ingrese el número de la acción que desea realizar:"));

    switch (opcion) {
        case 1:
            // Agregar un libro encima de la pila
            let nuevoLibro = prompt("Ingrese el título del nuevo libro:");
            pilaDeLibros.push(nuevoLibro);
            console.log(`"${nuevoLibro}" se ha agregado encima de la pila.`);
            break;

        case 2:
            // Quitar un libro de encima de la pila
            if (pilaDeLibros.length === 0) {
                console.log("La pila de libros está vacía. No hay libros para quitar.");
            } else {
                let libroQuitado = pilaDeLibros.pop();
                console.log(`"${libroQuitado}" se ha quitado de encima de la pila.`);
            }
            break;

        case 3:
            // Mostrar la pila actual de libros
            mostrarPila(pilaDeLibros);
            break;

        case 4:
            // Salir del programa
            console.log("¡Gracias por usar el programa!");
            continuar = false;
            break;

        default:
            console.log("Opción no válida. Por favor, seleccione una opción válida.");
    }
}

// Función para crear un mazo de cartas
function crearMazo() {
    let palos = ['Corazones', 'Diamantes', 'Tréboles', 'Picas'];
    let valores = ['As', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
    let mazo = [];

    for (let palo of palos) {
        for (let valor of valores) {
            mazo.push(`${valor} de ${palo}`);
        }
    }

    return mazo;
}

// Función para barajar el mazo de cartas
function barajarMazo(mazo) {
    for (let i = mazo.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [mazo[i], mazo[j]] = [mazo[j], mazo[i]]; // Intercambiar elementos aleatoriamente
    }
}

// Función para repartir cartas desde el mazo
function repartirCartas(mazo, cantidadCartas) {
    return mazo.splice(0, cantidadCartas);
}

// Crear un mazo de cartas
let mazoDeCartas = crearMazo();
console.log("Mazo de cartas inicial:", mazoDeCartas);

// Barajar el mazo de cartas
barajarMazo(mazoDeCartas);
console.log("Mazo de cartas después de barajar:", mazoDeCartas);

// Repartir 5 cartas desde el mazo
let cartasRepartidas = repartirCartas(mazoDeCartas, 5);
console.log("Cartas repartidas:", cartasRepartidas);
console.log("Mazo de cartas después de repartir:", mazoDeCartas);

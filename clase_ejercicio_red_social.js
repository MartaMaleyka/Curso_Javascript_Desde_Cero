/* Definición de la base de datos de usuarios */
const usersDatabase = [
    { username: "andres", password: "123" },
    { username: "caro", password: "456" },
    { username: "mariana", password: "789" }
];

/* Definición de la línea de tiempo de los usuarios */
const usersTimeline = [
    { username: "Estefany", timeline: "Me encata Javascript!" },
    { username: "Oscar", timeline: "Bebeloper es lo mejor!" },
    { username: "Mariana", timeline: "A mi me gusta más el café que el té" },
    { username: "Andres", timeline: "Yo hoy no quiero trabajar" }
];

/* Solicitar al usuario su nombre de usuario */
const username = prompt("Cuál es tu usuario?");

/* Solicitar al usuario su contraseña */
const password = prompt("Cuál es tu contraseña?");

/* Función para verificar si el usuario existe en la base de datos */
function usuarioExistente(username, password) {
    for (let i = 0; i < usersDatabase.length; i++) {
        if (usersDatabase[i].username === username && usersDatabase[i].password === password) {
            return true; // Si se encuentra el usuario, retorna true
        }
    }
    return false; // Si no se encuentra el usuario, retorna false
}

/* Función para iniciar sesión */
function signIn(username, password) {
    if (usuarioExistente(username, password)) { // Si el usuario existe en la base de datos
        alert(`Bienvenido a tu cuenta ${username}`); // Muestra un mensaje de bienvenida
        console.log(usersTimeline); // Imprime la línea de tiempo de los usuarios en la consola
    } else {
        alert("Uuups, usuario o contraseña incorrectos!"); // Muestra un mensaje de error si el usuario no existe
    }
}

/* Llamar a la función signIn con el nombre de usuario y contraseña ingresados por el usuario */
signIn(username, password);

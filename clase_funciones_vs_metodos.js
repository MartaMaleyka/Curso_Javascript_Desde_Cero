//Capacidad que tienen las funciones al igual que los objetos

//  Callback 

/*
Un callback en JavaScript se refiere a una función que se pasa como argumento a otra función y 
se ejecuta después de que ocurra algún evento o después de que se complete una operación asincrónica. 
Los callbacks son fundamentales en el manejo de operaciones asíncronas en JavaScript y son una parte 
esencial de la programación basada en eventos.
*/

function operacionAsincronica(callback) {
    // Simulando una operación asincrónica, como una solicitud AJAX o una lectura de archivo
    setTimeout(function() {
        console.log("La operación asincrónica ha terminado.");
        callback(); // Llamada al callback después de completar la operación
    }, 2000);
}

function miCallback() {
    console.log("¡El callback ha sido llamado!");
}

// Llamando a la función asincrónica y pasando el callback
operacionAsincronica(miCallback);



//Otro ejemplo
function sumaAsincrona(num1, num2, callback) {
    // Simulación de una operación de suma asíncrona
    setTimeout(function() {
        var resultado = num1 + num2;
        callback(resultado); // Llamada al callback con el resultado
    }, 1000);
}

function mostrarResultado(resultado) {
    console.log("El resultado de la suma es: " + resultado);
}

// Uso de la función de suma asíncrona con un callback
sumaAsincrona(5, 3, mostrarResultado);


//Retornar funciones 
/*
En JavaScript, puedes retornar funciones desde otras funciones. Esto se conoce como una función que devuelve una 
función. Aquí tienes un ejemplo básico:
*/

function crearFuncionMultiplicadora(factor) {
    // Esta función devuelve otra función que multiplica su argumento por el factor proporcionado
    return function(numero) {
        return numero * factor;
    };
}

// Crear una función multiplicadora con un factor de 3
var multiplicarPor3 = crearFuncionMultiplicadora(3);

// Utilizar la función retornada
var resultado = multiplicarPor3(7); // Devuelve 21
console.log(resultado);

//Asignar funciones a variables

/*
En JavaScript, puedes asignar funciones a variables de la misma manera que asignas cualquier
otro valor a una variable. Aquí tienes un ejemplo sencillo:
*/

// Declarar una función
function saludar(nombre) {
    console.log("Hola, " + nombre + "!");
}

// Asignar la función a una variable
var miFuncionSaludar = saludar;

// Llamar a la función a través de la variable
miFuncionSaludar("Juan");

//Asignar funciones a variables 
/*
En JavaScript, puedes asignar funciones a variables sin especificar un nombre para la función utilizando 
expresiones de función anónima o funciones sin nombre. Aquí te dejo un ejemplo:
*/

// Expresión de función anónima asignada a una variable
var miFuncion = function(parametro) {
    console.log("Esta es una función anónima. Parámetro:", parametro);
};

// Llamada a la función asignada a la variable
miFuncion("Hola, mundo!");

/*
En JavaScript, cuando usas la función call o apply en una función, puedes cambiar el valor de this dentro
de la función, lo que significa que estás ejecutando la función en el contexto del objeto proporcionado
como argumento. Esto permite que el objeto adquiera propiedades y métodos de la función.
*/

function a() {
    this.nombre = "Ejemplo";
    this.saludar = function() {
        console.log("Hola, " + this.nombre + "!");
    };
}

const obj = {};
a.call(obj);

// Ahora, obj tiene propiedades y métodos de la función a
console.log(obj.nombre);  // Imprime "Ejemplo"
obj.saludar();  // Imprime "Hola, Ejemplo!"
//Anidar funciones - nested functions 

/*
En JavaScript, puedes anidar funciones, lo que significa que defines una función dentro de otra función. Estas son 
conocidas como funciones anidadas o funciones anidadas (nested functions). La función interna tiene acceso a las 
variables de la función externa, lo que crea un cierre (closure). Aquí tienes un ejemplo:
*/

function externa(x) {
    function interna(y) {
        return x + y;
    }
    
    return interna;
}

// Crear una función anidada con la función externa
var funcionAnidada = externa(5);

// Llamar a la función anidada
var resultado = funcionAnidada(3); // Devuelve 8
console.log(resultado);

//Almacenar funciones en objetos

/*
En JavaScript, puedes almacenar funciones como propiedades de objetos. Esto te 
permite organizar y estructurar tu código de una manera que vincula funciones 
específicas con un objeto en particular. Aquí hay un ejemplo básico:
 */

// Objeto que almacenará funciones
var calculadora = {
    sumar: function(a, b) {
        return a + b;
    },
    restar: function(a, b) {
        return a - b;
    },
    multiplicar: function(a, b) {
        return a * b;
    },
    dividir: function(a, b) {
        return a / b;
    }
};

// Uso de las funciones almacenadas en el objeto
console.log(calculadora.sumar(5, 3));       // Imprime 8
console.log(calculadora.restar(10, 4));     // Imprime 6
console.log(calculadora.multiplicar(2, 7)); // Imprime 14
console.log(calculadora.dividir(9, 3));     // Imprime 3

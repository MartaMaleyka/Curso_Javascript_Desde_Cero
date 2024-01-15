/*En JavaScript, el tipo de datos `number` se utiliza para representar tanto números enteros como de 
punto flotante (decimales). Aquí tienes ejemplos y ejplicaciones para los aspectos mencionados:*/

//Decimal e Entero:


var decimal = 3.14;  // Número decimal
var entero = 42;     // Número entero

//Notación Científica:


var notacionCientifica = 6.022e23;  // 6.022 x 10^23

//Infinito y NaN (Not a Number):


var infinitoPositivo = Infinity;
var infinitoNegativo = -Infinity;
var noEsNumero = NaN;

//Operaciones Aritméticas:


var suma = 5 + 3;
var resta = 10 - 4;
var multiplicacion = 6 * 7;
var division = 20 / 5;

//Módulo y Exponenciación:


var modulo = 10 % 3;   // Resto de la división 10 / 3
var potencia = 2 ** 3;  // 2 elevado a la 3ra potencia

// Precisión y toFixed():


var numeroConDecimales = 5.6789;
var numeroRedondeado = numeroConDecimales.toFixed(2);  // Redondea a 2 decimales
console.log(numeroRedondeado);  // Salida: "5.68"

//Operaciones Avanzadas:

//Raíz Cuadrada:


var numero = 25;
var raizCuadrada = Math.sqrt(numero);
console.log(raizCuadrada);  // Salida: 5

//Valor Absoluto:


var numeroNegativo = -10;
var valorAbsoluto = Math.abs(numeroNegativo);
console.log(valorAbsoluto);  // Salida: 10

//Valor Aleatorio:


var numeroAleatorio = Math.random();  // Número aleatorio entre 0 (inclusive) y 1 (exclusivo)
console.log(numeroAleatorio);

/*Recuerda que la precisión en operaciones con números de punto flotante puede tener ciertos efectos secundarios 
debido a la representación binaria de estos números. En casos críticos de precisión, puedes considerar el uso
de bibliotecas como `Decimal.js` o manejar números enteros en lugar de decimales siempre que sea posible.*/
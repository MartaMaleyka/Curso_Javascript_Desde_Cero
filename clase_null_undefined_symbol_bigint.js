//En JavaScript, hay varios tipos de datos especiales además de los ya mencionados (`number`, `string`, etc.). 
//Estos son `null`, `undefined`, `symbol`, y `bigint`.


///`null` es un valor especial que representa la ausencia intencionada de cualquier objeto o valor. Se utiliza 
//para indicar que una variable no tiene un valor asignado.


var miVariable = null;
console.log(miVariable);  // Salida: null

//`undefined` es otro valor especial que indica la ausencia de un valor asignado. A menudo se usa para indicar 
//que una variable no ha sido inicializada.


var x;
console.log(x);  // Salida: undefined


//`symbol` es un tipo de dato primitivo introducido en ECMAScript 6. Representa un identificador único 
//y es útil cuando necesitas crear propiedades de objeto que no colisionen con otras propiedades.


var simbolo = Symbol("descripcion");
console.log(simbolo);  // Salida: Symbol(descripcion)



//`bigint` es un tipo de dato introducido en ECMAScript 2020 que permite representar enteros más grandes 
//que los que puede manejar el tipo `number`.


var numeroGrande = 9007199254740991n;  // La 'n' indica un bigint
console.log(numeroGrande);  // Salida: 9007199254740991n

//Recuerda que `bigint` solo puede representar números enteros y no puede mezclarse directamente con 
//el tipo `number`.

//Estos tipos (`null`, `undefined`, `symbol`, y `bigint`) son importantes en JavaScript para gestionar la 
//existencia o falta de valores, identificadores únicos, y operaciones con números enteros más grandes.
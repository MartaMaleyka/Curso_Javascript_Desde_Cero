/*Tipo de dato primitivo- Mutables
Un objeto inmutable, por otro lado, no puede ser modificado después de su creación. 
Cualquier operación que aparentemente modifica el objeto en realidad crea un nuevo 
objeto con los cambios aplicados. Los tipos de datos primitivos en JavaScript, 
como números,   cadenas y booleanos, son inmutables.*/
/*
1. Number (Número):
   - Representa valores numéricos, ya sean enteros o de punto flotante.
*/
    let entero = 42;
    console.log(entero);
   let decimal = 3.14;
   console.log(decimal);

/*
2. String (Cadena):
   - Representa secuencias de caracteres.
   */
   let mensaje = "Hola, mundo!";
   console.log(mensaje)


/* 
3. Boolean:
   - Representa un valor lógico verdadero o falso.
*/
   
   let esVerdadero = true;
   console.log(esVerdadero);
   let esFalso = false;
   console.log(esFalso);

/*
4. Null:
   - Representa la ausencia intencional de cualquier valor o referencia a un objeto.
*/
   
   let nulo = null;
   console.log(nulo)

/*
5. Undefined:
   - Representa un valor no asignado o no definido.
*/
   
   let indefinido=undefined;
   console.log(indefinido)
/*
6. Symbol:
   - Introducido en ECMAScript 6, representa un identificador único e inmutable.
*/
   let simbolo = Symbol('descripcion');
   console.log(simbolo)

/*
 Tipos de datos complejos- Mutables

Un objeto mutable es aquel cuyo estado puede ser modificado después de su creación. 
En otras palabras, se pueden realizar cambios en sus valores internos o propiedades
sin necesidad de crear un nuevo objeto. Ejemplos de estructuras de datos mutables
incluyen los objetos y arreglos en JavaScript.


1. Object (Objeto):
   - Representa una colección de pares clave-valor.
*/
  
   let persona = {
     nombre: "Marta",
     edad: 25,
     ocupacion: "Desarrollador"
   };

   console.log("Objeto original: ")
   console.log(persona)
   persona.ocupacion= "Profesora"
   console.log("Objeto cambiado: ")
   console.log(persona)

/*   
2. Array (Arreglo):
   - Representa una colección ordenada de valores.
*/
   
   let numeros = [1, 2, 3, 4, 5];
   console.log("cadena de numeros original: "+ numeros);
   numeros[2]=45;
   console.log("cadena de numeros cambiada " + numeros);
   
/*
3.Function (Función):
   - Representa un bloque de código reutilizable.
*/
   
   function saludar(nombre) {
     console.log("Hola, " + nombre + "!");
   }
   saludar("Marta");

/*
4. Date (Fecha):
   - Representa una fecha y hora específicas.
*/
   let fechaActual = new Date();
   console.log(fechaActual);
/*
Estos son los tipos de datos primitivos y complejos en JavaScript. 
Es importante comprender la diferencia entre ellos,
ya que los primitivos se pasan por valor, 
mientras que los complejos se pasan por referencia.
*/
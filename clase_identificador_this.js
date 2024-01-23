/*En JavaScript, la palabra clave `this` se utiliza para hacer referencia al objeto actual en 
el que se está ejecutando un código. El valor de `this` puede cambiar dependiendo del contexto 
en el que se utiliza. En el contexto de enlaces implícitos, `this` se refiere al objeto al 
que se ha enlazado implícitamente.

El enlace implícito ocurre cuando una función se llama en el contexto de un objeto. Esto
significa que el objeto antes del punto en la llamada a la función se convierte en el valor 
de `this` dentro de la función. Aquí hay un ejemplo para ilustrar esto:
*/

const persona = {
  nombre: 'Juan',
  saludar: function() {
    console.log(`Hola, soy ${this.nombre}`);
  }
};

persona.saludar(); // Salida: Hola, soy Juan

/*
En este ejemplo, cuando se llama a `persona.saludar()`, la función `saludar` se ejecuta en el contexto 
del objeto `persona`, por lo que `this` dentro de la función hace referencia al objeto `persona`. Esto 
permite acceder a la propiedad `nombre` del objeto `persona` usando `this.nombre`.

Sin embargo, es importante tener en cuenta que el valor de `this` puede cambiar en diferentes situaciones. 
Por ejemplo, si la función se llama sin un objeto específico como contexto (como en una función 
independiente), `this` puede referirse al objeto global (en el navegador, sería `window`).
*/

function saludarGlobal() {
  console.log(`Hola, soy ${this.nombre}`);
}

saludarGlobal(); // Dependiendo del entorno, podría dar un error o imprimir "Hola, soy undefined"

/*
En este caso, como la función `saludarGlobal` se llama sin un objeto específico, `this` podría no tener el 
valor que esperamos y, en el ejemplo, podría dar lugar a un error o imprimir "Hola, soy undefined".

En resumen, el uso de `this` en enlaces implícitos en JavaScript es una forma de acceder al objeto en el 
que se está ejecutando la función, y su valor puede cambiar según el contexto de la llamada a la función.

En JavaScript, también puedes controlar explícitamente el valor de `this` utilizando métodos como `call()`, 
`apply()`, y `bind()`. Estos métodos te permiten especificar el valor de `this` para una función dada. 
Aquí te dejo un ejemplo con `call()` y `apply()`:

 Método `call()`:
*/

const persona2 = {
  nombre: 'Juan'
};

const persona3 = {
  nombre: 'María'
};

function saludar2() {
  console.log(`Hola, soy ${this.nombre}`);
}

saludar2.call(persona2); // Salida: Hola, soy Juan
saludar2.call(persona3); // Salida: Hola, soy María

/*
En este ejemplo, `call()` se utiliza para llamar a la función `saludar` y especificar explícitamente 
el valor de `this` como `persona1` y luego como `persona2`.

### Método `apply()`:
*/

const persona4 = {
  nombre: 'Juan'
};

const persona5 = {
  nombre: 'María'
};

function saludar(greeting) {
  console.log(`${greeting}, soy ${this.nombre}`);
}

saludar.apply(persona4, ['Hola']); // Salida: Hola, soy Juan
saludar.apply(persona5, ['Hi']);   // Salida: Hi, soy María

/*
En este ejemplo, `apply()` se utiliza de manera similar a `call()`, pero los argumentos de la función 
se pasan como un array.

Método `bind()`:
*/

const persona6 = {
  nombre: 'Juan',
  saludar: function() {
    console.log(`Hola, soy ${this.nombre}`);
  }
};

const saludarPersona = persona.saludar.bind(persona6);

saludarPersona(); // Salida: Hola, soy Juan

/*
`bind()` crea una nueva función enlazada al objeto que se pasa como argumento, de modo que cuando se llame 
a la nueva función, `this` se referirá al objeto proporcionado.

Estos métodos son útiles cuando necesitas controlar explícitamente el valor de `this` en una función, 
especialmente cuando trabajas con funciones que no están directamente vinculadas a un objeto o 
contexto específico.
*/
// Crear un array inicial
let miArray = ['Manzana', 'Plátano', 'Naranja'];
console.log("Array inicial:", miArray);

// Usando el método push() para agregar elementos al final del array
miArray.push('Sandía', 'Melón');
console.log("Array después de agregar elementos con push():", miArray);

/*
Explicación del método push():
El método push() se utiliza para agregar uno o más elementos al final de un array.
Recibe uno o más argumentos, que son los elementos que se van a agregar al array.
Modifica el array original y devuelve la nueva longitud del array.
En este ejemplo, 'Sandía' y 'Melón' se agregan al final del array 'miArray'.
*/

// Usando el método pop() para eliminar el último elemento del array
let ultimoElementoEliminado = miArray.pop();
console.log("Último elemento eliminado con pop():", ultimoElementoEliminado);
console.log("Array después de eliminar el último elemento con pop():", miArray);

/*
Explicación del método pop():
El método pop() se utiliza para eliminar el último elemento de un array.
No recibe ningún argumento.
Modifica el array original y devuelve el elemento eliminado.
En este ejemplo, 'Melón' es el último elemento del array 'miArray' y se elimina.
La variable 'ultimoElementoEliminado' contiene el valor 'Melón' después de la operación pop().
El array 'miArray' ahora contiene solo 'Manzana', 'Plátano', 'Naranja'.
*/

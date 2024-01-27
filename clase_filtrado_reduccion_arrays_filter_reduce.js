
// Array de números
let numeros = [1, 2, 3, 4, 5];

// Método filter(): Filtra elementos del array basados en una condición especificada en una función de retorno de llamada.
let numerosPares = numeros.filter(numero => numero % 2 === 0);
console.log("Elementos pares del array usando filter():", numerosPares);

// Método reduce(): Reduce el array a un solo valor aplicando una función de retorno de llamada a cada elemento del array.
let sumaNumeros = numeros.reduce((acumulador, numero) => acumulador + numero, 0);
console.log("Suma de todos los elementos del array usando reduce():", sumaNumeros);


//CASO 2
// Contar la frecuencia de cada palabra en el array words
const words = ['apple', 'banana', 'hello', 'bye', 'banana', 'bye', 'bye'];
const wordFrecuency = words.reduce((accumulator, currentValue) => {
  if (accumulator[currentValue]) {
    accumulator[currentValue]++;
  } else {
    accumulator[currentValue] = 1;
  }
  return accumulator;
}, {});
console.log(wordFrecuency); // Imprime la frecuencia de cada palabra

// caso 3-  Filtrar las calificaciones que pasan del array grades y calcular el promedio
const grades = [85, 92, 60, 78, 95, 66, 88, 50, 94];
const passingGrades = grades.filter(grade => grade >= 70);
const averagePassingGrade = passingGrades.reduce((sum, grade) => sum + grade, 0) / passingGrades.length;
console.log('Original Grades: ', grades); // Imprime las calificaciones originales
console.log('Passing Grades: ', passingGrades); // Imprime las calificaciones que pasan
console.log('Average Passing Grade: ', averagePassingGrade); // Imprime el promedio de las calificaciones que pasan

/*
Explicación:

- El método `filter()` itera sobre cada elemento del array y devuelve un nuevo array que contiene solo los elementos 
para los cuales la función de retorno de llamada devuelve `true`. En este ejemplo, se utiliza para filtrar los 
números pares del array `numeros`.

- El método `reduce()` aplica una función de retorno de llamada a cada elemento del array, acumulando un solo valor 
resultante. El valor acumulador se pasa a la función de retorno de llamada en cada iteración, junto con el elemento 
actual del array. En este ejemplo, se utiliza para calcular la suma de todos los elementos del array `numeros`.

Ambos métodos son útiles para manipular arrays en JavaScript:

- `filter()` es útil cuando se desea crear un nuevo array con elementos filtrados basados en una condición específica.

- `reduce()` es útil cuando se desea reducir el array a un solo valor acumulando resultados basados en una 
función específica.
*/
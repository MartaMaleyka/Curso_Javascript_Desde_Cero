/*
La anatomía de una función en JavaScript incluye varios elementos, y aquí te proporcionaré una descripción detallada 
de cada uno de ellos:

1. Palabra clave `function`: Comienza con la palabra clave `function` seguida del nombre de la función 
(opcional) y paréntesis que pueden contener los parámetros de la función.


   function nombreDeLaFuncion(parametro1, parametro2) {
       // Cuerpo de la función
   }


2. Nombre de la función: Es un identificador opcional que se utiliza para referirse a la función. Puede ser omitido
 en funciones anónimas (aquellas sin nombre).


   function saludar() {
       console.log("¡Hola!");
   }


3. Paréntesis de parámetros: Dentro de los paréntesis, puedes declarar los parámetros que la función aceptará. 
Los parámetros son variables locales a la función.


   function suma(a, b) {
       return a + b;
   }


4. Cuerpo de la función: Es el bloque de código encerrado entre llaves `{}`. Contiene las declaraciones y las 
sentencias que conforman la lógica de la función.


   function cuadrado(x) {
       let resultado = x * x;
       return resultado;
   }


5. Sentencia `return`: Es opcional y se utiliza para devolver un valor desde la función. 
Si no se especifica un `return` o se usa sin un valor, la función devolverá `undefined`.


   function multiplicar(a, b) {
       return a * b;
   }


6. Invocación de la función: Una vez definida la función, puedes llamarla o invocarla usando su nombre seguido de paréntesis. Los valores que pasas entre paréntesis se utilizan como argumentos para los parámetros de la función.


   let resultado = suma(3, 4); // resultado ahora es 7


Es importante tener en cuenta que las funciones en JavaScript son objetos de primera clase, lo que significa que pueden ser asignadas a variables, pasadas como argumentos, y devueltas por otras funciones. Además, las funciones pueden ser declaradas de varias maneras, como expresiones de función, funciones anónimas, y funciones de flecha (introducidas en ECMAScript 6). La anatomía básica mencionada anteriormente se aplica a todas las formas de funciones en JavaScript.
*/

function calculateDiscountedPrice (price, discountPercentage) {
    const discount = (price * discountPercentage) / 100
    const priceWithDiscount = price - discount
  
    return priceWithDiscount
  }
  
  const originalPrice = 1000
  const discountPercentage = 15
  const finalPrice = calculateDiscountedPrice(originalPrice, discountPercentage)
  
  console.log('Original Price: $' + originalPrice)
  console.log('Discount: ' + discountPercentage + '%')
  console.log('Price with discount: $' + finalPrice)
/*
    Operadores de comparación
*/
const a = 10;
const b = 20;
const c = "10";

// == (Igualdad): Evalúa si los valores son iguales con conversión de tipo. Devuelve false porque a (número) no es igual a b (número).
a == b; // false

// === (Igualdad estricta): Evalúa si los valores son iguales y del mismo tipo. Devuelve false porque a (número) no es del mismo tipo que c (cadena).
a === c; // false

// != (Desigualdad): Evalúa si los valores no son iguales con conversión de tipo. Devuelve true porque a (número) no es igual a b (número).
a != b; // true

// !== (Desigualdad estricta): Evalúa si los valores no son iguales y no son del mismo tipo. Devuelve true porque a (número) no es del mismo tipo que c (cadena).
a !== c; // true

// > (Mayor que): Evalúa si el valor de la izquierda es mayor que el de la derecha. Devuelve false porque a (10) no es mayor que b (20).
a > b; // false

// <= (Menor o igual que): Evalúa si el valor de la izquierda es menor o igual que el de la derecha. Devuelve true porque a (10) es menor o igual que b (20).
a <= b; // true

// >= (Mayor o igual que): Evalúa si el valor de la izquierda es mayor o igual que el de la derecha. Devuelve false porque a (10) no es mayor o igual que b (20).
a >= b; // false

// > (Mayor que): Evalúa si el valor de la izquierda es mayor que el de la derecha. Devuelve false porque a (10) no es mayor que c (cadena "10").
a > c; // false

//Buena práctica, es agregar al inicio del variable de tipo boolean unas palabras claves que permiten identificar su tipo, como si fuera una pregunta.

//1. is (es)
const isActive = true

//2. has (tener)
const hasPermisson = false

//Se puede tener una conversión implícita o explícita a booleano.

//Conversión Implícita (Lo hace javaScript)
const result = 5 > 3
console.log(result)

const name = 'Platzi'
console.log(!!name) //Para comprobar si tiene un valor anteponer !!


//Conversión Explícita
const value = 0
const explicitBoolean = Boolean(value)
console.log(explicitBoolean)

const otherValue = 24
const explicitOtherBoolean = Boolean(otherValue)
console.log(explicitOtherBoolean)
// Ejemplo más complejo de bucle for...in en JavaScript con un objeto

// Creamos un objeto como ejemplo con diferentes tipos de propiedades
let coche = {
    marca: "Toyota",
    modelo: "Camry",
    año: 2020,
    color: "Gris",
    caracteristicas: ["Automatico", "4 puertas", "Sedán"],
    conductor: {
        nombre: "María",
        edad: 30
    }
};

/*
  Utilizamos el bucle for...in para iterar sobre las propiedades del objeto 'coche'.
  En cada iteración, la variable 'clave' tomará el nombre de la propiedad actual.
  Se verifica si la propiedad es un array o un objeto para manejarlo de manera diferente.
*/
for (let clave in coche) {
    if (coche.hasOwnProperty(clave)) {
        if (Array.isArray(coche[clave])) {
            console.log(clave + ": " + coche[clave].join(", ")); // Imprime el array como una cadena
        } else if (typeof coche[clave] === "object") {
            console.log(clave + ":");
            for (let subclave in coche[clave]) {
                console.log("  " + subclave + ": " + coche[clave][subclave]);
            }
        } else {
            console.log(clave + ": " + coche[clave]);
        }
    }
}

/*
  Descripción:
  El bucle for...in se utiliza para iterar sobre las propiedades enumerables de un objeto.
  En este ejemplo, manejamos diferentes tipos de propiedades, como arrays y objetos anidados.

  Usos comunes:
  - Iterar sobre propiedades de un objeto.
  - Trabajar con objetos complejos que contienen arrays u objetos anidados.

  Nota: Se utiliza hasOwnProperty() para asegurarse de que la propiedad pertenece al objeto y no es heredada.
*/


//Ejemplo con `call` y perros:

const perro1 = {
  nombre: 'Buddy',
  ladrar: function() {
    console.log(`${this.nombre} está ladrando.`);
  }
};

const perro2 = {
  nombre: 'Max'
};

// Llamando al método ladrar en el contexto de perro1
perro1.ladrar(); // Salida: Buddy está ladrando.

// Llamando al método ladrar en el contexto de perro2 usando call
perro1.ladrar.call(perro2); // Salida: Max está ladrando.

/*Explicación: En este ejemplo, `call` se utiliza para ejecutar el método `ladrar` en el contexto 
del objeto `perro2`. Aunque `perro2` no tiene un método `ladrar`, `call` permite ejecutar el método 
`ladrar` de `perro1` en el contexto de `perro2`.
*/
//Ejemplo con `apply` y carros:

const carro1 = {
  marca: 'Toyota',
  conducir: function(velocidad) {
    console.log(`Conduciendo un ${this.marca} a ${velocidad} km/h.`);
  }
};

const carro2 = {
  marca: 'Ford'
};

// Llamando al método conducir en el contexto de carro1 con apply
carro1.conducir.apply(carro1, [60]); // Salida: Conduciendo un Toyota a 60 km/h.

// Llamando al método conducir en el contexto de carro2 con apply
carro1.conducir.apply(carro2, [80]); // Salida: Conduciendo un Ford a 80 km/h.


/*
Explicación: En este ejemplo, `apply` se utiliza para ejecutar el método `conducir` en el contexto 
del objeto `carro2` y se pasa la velocidad como un array de argumentos.
*/
//Ejemplo con `bind` y personas:

const persona1 = {
  nombre: 'Juan',
  saludar: function() {
    console.log(`Hola, soy ${this.nombre}`);
  }
};

const persona2 = {
  nombre: 'María'
};

// Creando una nueva función vinculada al contexto de persona1
const saludarPersona1 = persona1.saludar.bind(persona1);

// Llamando a la nueva función
saludarPersona1(); // Salida: Hola, soy Juan

// bind también se puede utilizar con nuevos contextos, como persona2
const saludarPersona2 = persona1.saludar.bind(persona2);
saludarPersona2(); // Salida: Hola, soy María
/*
Explicación: En este ejemplo, `bind` se utiliza para crear una nueva función `saludarPersona1` que 
está vinculada al contexto de `persona1`. Luego, se llama a esta nueva función, imprimiendo 
"Hola, soy Juan". Además, se crea otra nueva función `saludarPersona2` vinculada al contexto de 
`persona2` y se llama, imprimiendo "Hola, soy María". */
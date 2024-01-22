/*En las funciones puras, dada una misma entrada (input), obtendremos una misma salida (output). Por otro lado, las funciones puras no tienen efectos secundarios (side effects).

Qué nos puede causar side effects:

Modificar variables globales.
*/
let globalVariable = 10;

function modifyGlobalVariable() {
  globalVariable = 20;
}
/*
Modificar parámetros.
*/
function modificarObjeto(obj) {
    obj.valor = 20;  // Esto modifica una propiedad del objeto, no reasigna el parámetro.
    console.log(obj.valor);
  }
  
  let objeto = { valor: 10 };
  modificarObjeto(objeto);  // Se pasa el objeto como argumento.
  console.log(objeto.valor);  // El objeto fue modificado y esto se refleja fuera de la función.  

/*
Solicitudes HTTP.
*/



/*
Impresiones de mensajes en pantalla o consola.
*/
function printToConsole(message) {
    console.log(message);
  }  

/*
Manipulación del DOM (Document Obect Model).
*/
function modifyDOM() {
    document.getElementById('elementId').innerHTML = 'Nuevo contenido';
  }  
/*
Obtener la hora actual.
*/

function obtenerHoraActual(fecha) {
    const hora = fecha.getHours();
    const minutos = fecha.getMinutes();
    const segundos = fecha.getSeconds();
  
    return `${hora}:${minutos}:${segundos}`;
  }
  
  const fechaActual = new Date();
  console.log(obtenerHoraActual(fechaActual));

  //Uso de temporizadores

function delayExecution() {
    setTimeout(() => {
      // Código ejecutado después de un cierto período de tiempo
    }, 1000);
}
  
//Manejo de errores que cambian el flujo de control
function performRiskyOperation() {
    try {
      // Operación arriesgada
    } catch (error) {
      // Manejo de errores que puede afectar el flujo de control
    }
  }

  //Modificación de Objetos Compartidos:
  let sharedData = { counter: 0 };

  function incrementCounter(obj) {
    obj.counter++;
  }
  
  console.log(sharedData.counter);  // Antes de llamar a la función
  incrementCounter(sharedData);
  console.log(sharedData.counter);  // Después de llamar a la función
  

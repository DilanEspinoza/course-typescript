// Este es un valor que se se puede utilizar cuando no queremos tener un valor en particular
// any y unknown son dos tipos especiales en TypeScript que permiten trabajar con valores de cualquier tipo, pero tienen diferencias clave en su uso y seguridad.
/* Any */
//
var cualquierCosa = "Esto es un texto";
cualquierCosa = 21;
/* cualquierCosa.unMetodoQueNoExiste(); */ // esto en tiempo de desarrollo no cuuasa ningun problema pero en tiempo de ejecucion, va ha romper todo
/* Unknown */
// es casi como any, solo que este si realiza una comparacion de tipo
var nose = "nose";
if (typeof nose === "string") {
    console.log("Esta es la longitud del texto: ".concat(nose.length)); // Safe, TypeScript sabe que es un string
}
// Estos dos es necesario utilizarlos con mucha moderacion y en casos muy especiales
// porque si utilizamos mucho esto no servira de nada typescript y seria mejor utilizar javascript

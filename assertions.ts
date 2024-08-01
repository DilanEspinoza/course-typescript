/* as const  */

// as constes una afirmación de tipo en TypeScript que le permite afirmar que una expresión tiene un tipo
// específico y que su valor debe tratarse como un valor de solo lectura.

// Por ejemplo:

const colors = ["red", "green", "blue"] as const;

// aqui tendremos un erro que tirara el editor porque nos dira que colors[0]
// es una propiedad de solo lectura, y no se deberia modificar

const colorYellow = (colors[0] = "yellow");
console.log(colorYellow);

// El uso como const permite que TypeScript infiera tipos más precisos para las constantes,
// lo que puede conducir a una mejor verificación de tipos y una mejor inferencia de tipos en su código.

/* as [type] | como tipo */

// en typescript la palabra reservada as es utilizada para  para las afirmaciones de tipo,
// lo  permite informar explícitamente al compilador sobre el tipo de valor cuando no
// se puede inferir automáticamente. Esta es una forma de anular rificación de tipo estático predeterminado
// Ejemplo:

// aqui iniciamos la variable cualquierValor con un tipo cualquiera

let cualquierValor: any = "Hello World";

// aqui decimos que la variable cualquierValor es de tipo string antes de acceder a su propiedad length

let longitud: number = (cualquierValor as string).length;
console.log(longitud);

/* as any  */

let anyValue: any = 42;

// Podemos asignar any a anyValue, independientemente de su tipo.
anyValue = "Hello, world!";
anyValue = true;

// las funciones por defecto no tienen inferencia, a menos de que tenga algun tipo de contexto

// 1.- forma de timpar las funciones

function saludar({ nombre, edad }: { nombre: string; edad: number }) {
	console.log(
		"Hola, mucho gusto " + nombre + " y mi edad es " + edad + " años"
	);
}

saludar({ nombre: "Pepelian", edad: 19 });

// 2.- forma de tipar una funcion

function saludar2(persona: { nombre: string; edad: number }) {
	const { nombre, edad } = persona;
	console.log(
		"Hola, mucho gusto " + nombre + " y mi edad es " + edad + " años"
	);
}

// 3.- forma de tipar una funcion

/* const gretting = (fn:Function // esto esta mal ) => {
	return fn("Pepelian");
};

gretting((nombre: string) => {
	console.log(nombre);
});
 */
const gretting = (fn: (nombre: string) => void) => {
	fn("Pepelian");
};

gretting((nombre: string) => {
	console.log(nombre);
});

// tipar arrow function

const sumar = (a: number, b: number): number => {
	return a + b;
};
sumar(10, 20);

// never se utiliza cuando nunca quieres recibir nada o cuando sabesmos que una funcion no va a retornar nada

// Parámetros Opcionales y Valores Predeterminados
function multiply(a: number, b?: number): number {
	if (b === undefined) {
		return a * 2; // Valor predeterminado si b no se proporciona
	}
	return a * b;
}

console.log(multiply(5)); // Output: 10
console.log(multiply(5, 3)); // Output: 15

//  Funciones como Tipos

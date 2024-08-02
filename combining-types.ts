/* Tipos combinados */
// Union types se usa cuando un valor puede tener uno o varios tipos

// miVariable puede set de tipo string o number
let miVariable: string | number;

/* 
miVariable = "Hello World"
miVariable = 20 
*/

interface Carro {
	nombre: string;
	modelo: string;
	numLlantas: string | number;
}

// Aqui pasa ecaptamente igual que miVariable, en carro.numLlantas puede ser string o number

let carro: Carro = {
	nombre: "Audi",
	modelo: "A7",
	numLlantas: "3 llantas :)",
};

let carro2: Carro = {
	nombre: "Audi",
	modelo: "A7",
	numLlantas: 4,
};

function validarFormulario(input1: string | number, input2: string | number) {
	return {
		input1,
		input2,
	};
}

/* Intersion Types */

// Una intersepcion de tipo crea un nuevo tipo para combinar varios tipos ya existentes
// Teniendo el nuevo tipo tiene todas las características de los tipos existentes.

type typeA = string;
type typeB = number;

type typeAB = typeA & typeB;

/* keyof Operador */

// Cuando se usa en un object type con keys explícitas, keyof crea un tipo de unión con esas claves.

interface User {
	nombre: string;
	apellido: string;
	edad: number;
}

let user: User = {
	nombre: "Pepelian",
	apellido: "Espartano",
	edad: 18,
};

function userProperty(user: User, property: keyof User) {
	console.log(`Printing user property ${property}: "${user[property]}"`);
}

userProperty(user, "nombre"); // output

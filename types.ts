/* Tipos primitivos
// boolean string number
*/

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

// Las interfaces son similares a los alias de tipo (type), excepto que este solo se aplica a object.

interface Persona {
	nombre: string;
	apellido: string;
	ano: number;
}

const persona: Persona = {
	nombre: "Pepelian",
	apellido: "Espartano",
	ano: 19,
};

// Extending Interfaces
// Extending significa que una nueva interfaz con las mismas propiedades que la original, tendra además algo nuevo.

interface ColorPelo extends Persona {
	color: string;
}

const colorPelo: ColorPelo = {
	nombre: "Pepelian",
	apellido: "Espartano",
	ano: 19,
	color: "rubio como",
};

// Optional Properties
// Podemos hacer que una interface tenga una clave que puede ser opcional, es decir esa clave se puedo o no utilizar

interface Hobbii extends ColorPelo {
	hobbii?: string;
}

const personaConHobbii: Hobbii = {
	nombre: "Pepelian",
	apellido: "Espartano",
	ano: 19,
	color: "rubio como",
	hobbii: "programar",
};

const personaSinHobbii = {
	nombre: "Pepelian",
	apellido: "Espartano",
	ano: 19,
	color: "rubio como",
};

// Las interfaces son similares a los alias de tipo (type), excepto que este solo se aplica a object.

interface Persona {
	nombre: string;
	apellido: string;
	ano: number;
}

const persona: Persona = {
	nombre: "Pepelian",
	apellido: "Espartano",
	ano: 19,
};

// Extending Interfaces
// Extending significa que una nueva interfaz con las mismas propiedades que la original, tendra además algo nuevo.

interface ColorPelo extends Persona {
	color: string;
}

const colorPelo: ColorPelo = {
	nombre: "Pepelian",
	apellido: "Espartano",
	ano: 19,
	color: "rubio como el maiz",
};

// Optional Properties
// Podemos hacer que una interface tenga una clave que puede ser opcional, es decir esa clave se puedo o no utilizar

interface Hobbii extends ColorPelo {
	hobbii?: string;
}

const conHobbii: Hobbii = {
	nombre: "Dilan",
	apellido: "Espinoza",
	ano: 19,
	color: "negro",
	hobbii: "programar",
};

const sinHobbii = {
	nombre: "Plutarco",
	apellido: "Gonza",
	ano: 19,
	color: "cafe oscuro",
};

/* Interfaces para funciones */

interface Operacion {
	(a: number, b: number): number;
}

const sumar: Operacion = (a: number, b: number) => a + b;
const multiplicar: Operacion = (a: number, b: number) => a * b;

console.log(sumar(5, 3)); // 8
console.log(multiplicar(5, 3)); // 15

/* Interfaces para clases */

interface Animal {
	nombre: string;
	haceSonido(): void;
}

class Oveja implements Animal {
	nombre: string;

	constructor(nombre: string) {
		this.nombre = nombre;
	}
	haceSonido(): void {
		console.log("Huau huau!");
	}
}

const rodolfo = new Oveja("Rodolfo");
rodolfo.haceSonido();

// Type sirve para dar tipos por separado a las variables que lo lleguen a necesitar

type Cursos = {
	nombre: string;
	tiempo: number;
	categorias: string[];
	calificacion?: number;
};

let typescript: Cursos = {
	nombre: "Typescript",
	tiempo: 1,
	categorias: ["web", "sotfware", "javascript"],
};

console.log(typescript);
// Ponemos ano carro porque al parecer la ñ no la toma como una letra
type NombreCarro = string;
type ModeloCarro = string;
// Ehh al principio no podia pero ahora si puedo poner la ñ, si no sonaba muy extraño
type AñoCarro = number;

type Carro = {
	nombre: NombreCarro;
	modelo: ModeloCarro;
	ano: AñoCarro;
};

const nombreCarro: NombreCarro = "Adui";
const modeloCarro: ModeloCarro = "A8";
const añoCarro: AñoCarro = 2019;

const carro: Carro = {
	nombre: nombreCarro,
	modelo: modeloCarro,
	ano: añoCarro,
};

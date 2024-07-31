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

// sirve para dar tipos por separado a las variables que lo lleguen a necesitar

type NombreCarro = string;
type ModeloCarro = string;
type AnoCarro = number;

type Carro = {
	nombre: NombreCarro;
	modelo: ModeloCarro;
	ano: AnoCarro;
};

const nombreCarro: NombreCarro = "Adui";
const modeloCarro: ModeloCarro = "A8";
const anoCarro: AnoCarro = 2019;

const carro: Carro = {
	nombre: nombreCarro,
	modelo: modeloCarro,
	ano: anoCarro,
};

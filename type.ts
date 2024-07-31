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

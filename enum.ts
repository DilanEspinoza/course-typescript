// enum es una lista de constantes que no permite referenciar en un futuro

enum Tallas {
	Pequeña = "s",
	Mediana = "m",
	Grande = "l",
	Extragrande = "cl",
}

const variable = Tallas.Grande;
console.log(variable);

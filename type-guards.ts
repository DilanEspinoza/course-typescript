/*  Equality adn typeof */
function printAll(strs: string | string[] | null) {
	// aqui estamos verificando que el parametro strs es difirente a un valor nullo,
	// si es así vamos a pasar a otra verificacion
	if (strs !== null) {
		// en caso de que el parametro alla sido diferente a un valor nullo, ahora vamos a vereficar que este sea un objeto
		if (typeof strs === "object") {
			for (const s of strs) {
				console.log(s);
				//este es el proceso que vamos a realizar si el parametro cumple la condicion
			}
		} else if (typeof strs === "string") {
			// si tambien el valor del parametro no es un valor:nullo o un objeto, entonces
			// vamos a verificar por ultima vez en este caso si el valor es un string
			console.log(strs);
		} else {
			//Si el parametro no cumplio con alguna de nuestras verificaciones entonces pasara por este lugar
			console.log("El valor del parametro no es de un: string, objeto, null");
			// si el valor es null no imprimira nada
		}
	}

	/* if(strs === null){
      console.log("El valor es nullo")
    } */
}

printAll("Pepelian");
printAll(["Typescript", "Javascript", "Python"]);
printAll(null);
// printAll(1);

/* instaceof  */

// instanceof comprueba si un objeto es una instancia de una clase o de una función constructora.
// Devolviendo un valor booleano: 'true si el objeto es una instancia del tipo, y 'false de lo
// contrario, asegurando una comprobación de tipo robusta durante la ejecución.

/* function Company (name: string, est: number) {
    this.name = name;
    this.est = est;
}

const GFG = new Company("Facebook", 2009);

const cmpny2 = {
    name: "Company2",
    est: 2010
}

console.log(GFG instanceof Company); // devolvera true
console.log(cmpny2 instanceof Company); // devolvera false
 */
class Company {
	name: string;
	est: number;
	constructor(name: string, est: number) {
		(this.name = name), (this.est = est);
	}
}

const GFG = new Company("Facebook", 2009);

const cmpny2 = {
	name: "Company2",
	est: 2010,
};

console.log(GFG instanceof Company);
console.log(cmpny2 instanceof Company);

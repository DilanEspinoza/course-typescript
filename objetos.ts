// Los objetos son los mismo que los de javascript

type Persona = { id: number; nombre: string };
const objeto: Persona = { id: 1, nombre: "pepelian" };

console.log(objeto);

// aqui es donde vamos a utilizar mayormente las interfaces

/* 
interface User{
  id:number,
  username:string,
  isActive:boolean
}

const user:User ={
  id:1,
  username:"Pepelian",
  isActive : false
}
 */

// Pero tambien typescript es capas de inferir los objetos

const user = {
	id: 1,
	username: "Pepelian",
	isActive: false,
};

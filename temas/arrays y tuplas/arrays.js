// usar cada uno de los metodos de los arryas para practicarlos un poco
// Forma de declara una matriz en todas sus formas
//  1.- Uso de corchetes
/*let nombres:string[] = ["Dilan", "Pepelian", "Plutarco"];*/
// tambien se puede de hacer de la forma en la que se hace en javascript, porque typescript va a inferir en este caso de que es una matriz de strings
var nombres = ["Dilan", "Pepelian", "Plutarco"];
console.log(nombres);
//  2.- Usando un tipo de matriz genérico
/* let frutas = new Array("pera","manzana","naranja")*/
var frutas = ["pera", "manzana", "naranja"];
console.log(frutas);
//  3.- Matriz de tipos múltiples
// let cosasAleatorias: (string | number)[] = [1, 2, "nose"]; // forma recomendable de usar y mas legible
var cosasAleatorias = [1, 2, "nose"];
console.log(cosasAleatorias);
// Las matrices se pueden declarar e inicializar por separado.
var ids;
ids = [23, 34, 100, 124, 44];
// 5.-como acceder a los elementos de una matriz
//  - Por su indice
var objetos = ["puerta", "tele", "baño"];
console.log(objetos[0]);
console.log(objetos[1]);
console.log(objetos[2]);
//  - mediante un bucle
for (var objeto in objetos) {
    console.log(objeto);
}
// o tambien lo podemos hacer de esta forma
for (var i = 0; i < objetos.length; i++) {
    console.log(objetos[i]);
}
//
var personas = [
    { nombre: "Dilan", edad: 18 },
    { nombre: "Pepelian", edad: 19 },
    { nombre: "Plutarco", edad: 20 },
];
var personasFiltradas = personas.filter(function (persona) { return persona.edad < 20; });
console.log(personasFiltradas);
// Lo que estamos haciendo aqui es lo mismo que estamos haciendo arriba, pero solo que aqui lo estamos tipando
var lenguajes = [
    { nombre: "Python", posicion: 1 },
    { nombre: "Javascript", posicion: 2 },
    { nombre: "C++", posicion: 3 },
];
// utilizando map
var ranking = lenguajes.map(function (lenjuaje) { return lenjuaje.nombre; });
console.log("utilizando map " + ranking);
// utilizando find
var estaPhp = lenguajes.find(function (lenguaje) { return (lenguaje.nombre = "Php"); });
console.log("utilizando find" + estaPhp);
var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// utilizando reduce
var contador = numeros.reduce(function (acomulador, numero) {
    acomulador += numero;
    return acomulador;
}, 50);
console.log("utilizando reduce " + contador);
/* Recien estoy aprendiendo estos metodos */
// utilizando fiil
var numerosEspeciales = numeros.fill(0, 5, 20);
console.log("utilizando fill " + numerosEspeciales);
// utilizando some
var divisible = numeros.some(function (numero) { return numero % 2 === 0; });
console.log("utilizando some" + divisible);
// utilizando every
var sonMayores = function (numero) { return numero < 11; };
console.log("utilizando every " + numeros.every(sonMayores));
// utilizando sort
var numerosDesordenados = [4, 2, 1, 6, 5, 10, 3, 7, 9, 8];
console.log("utilizando sort" + numerosEspeciales.sort());
// Si el diez aparece despues del numero 1 es por que 10 va antes que 2 en el valor Unicode

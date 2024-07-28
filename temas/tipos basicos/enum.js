// enum es una lista de constantes que no permite referenciar en un futuro
var Tallas;
(function (Tallas) {
    Tallas["Peque\u00F1a"] = "s";
    Tallas["Mediana"] = "m";
    Tallas["Grande"] = "l";
    Tallas["Extragrande"] = "cl";
})(Tallas || (Tallas = {}));
var variable = Tallas.Grande;
console.log(variable);

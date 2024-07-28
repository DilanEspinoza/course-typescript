// void se utiliza cuando no hay datos. Por ejemplo, si una función no devuelve ningún valor, puede especificar void como tipo de valor devuelto.
// no es necesario utilizar void en una variable porque
// Las funciones con tipos void no se pueden asignar a variables de tipos any o unknown sin una aserción de tipo.
/* function gretting(): void {
    console.log("¡Hi!");
}

gretting();

function nada(algo: string): void {
    console.log("nada: " + algo);
}
 */
// nada("persona");
/*
function nose(): void {
    return "nose que poner aqui"; // hacer esto es estupido
} */
/* let $botones = document.querySelectorAll(".btn");
$botones.forEach((boton) => {
    boton.addEventListener("click", function (): void {
        boton.textContent === "click"
            ? console.log("Es posible cambiar el color del boton")
            : console.log(
                    "el boton no tiene ese texto para poder cambiarlo de color "
              );
    });
});
 */
var $myBoton = document.querySelector(".btn");
$myBoton === null || $myBoton === void 0 ? void 0 : $myBoton.addEventListener("click", function () {
    console.log("¡Hiciste click sobre mí!");
});
// el operador ?. es conocido como encadenamiento opcional

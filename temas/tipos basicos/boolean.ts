let edad = 17;
let permiso: boolean = true;

let permitirIngreso =
	(edad >= 18 && permiso) || (edad >= 18 && !permiso)
		? "puedes ingresar "
		: "no puedes ingresar porque eres menor de edad o no tienes permiso ";

console.log(permitirIngreso);

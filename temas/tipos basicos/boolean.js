var edad = 17;
var permiso = true;
var permitirIngreso = (edad >= 18 && permiso) || (edad >= 18 && !permiso)
    ? "puedes ingresar "
    : "no puedes ingresar porque eres menor de edad o no tienes permiso ";
console.log(permitirIngreso);

//Union de tipos
let age: string | number;

//Validar mediante guardian de tipos metodo clásico
function isNumber(obj: number | string): obj is number {
  return typeof obj === "number";
}

function isString(obj: number | string): obj is string {
  return typeof obj === "string";
}

//El guardian de tipos verifica una sola vez en busca de saber el tipo de dato que viene mediante una condición.
function printAge(age: string | number) {
  if (isNumber(age)) {
    //Estamos seguro de que el objeto es un numero
  } else {
    //Estamos seguro de que el objeto es una cadena de texto
  }
}

//El guardian de tipos verifica una sola vez en busca de saber el tipo de dato que viene mediante una condición.
function printAgeAbrev(age: string | number) {
  if (typeof age === "number") {
    //Estamos seguro de que el objeto es un numero
  } else {
    //Estamos seguro de que el objeto es una cadena de texto
  }
}

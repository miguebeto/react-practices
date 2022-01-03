//Se usa cuando queremos que un elemento acepte por parámetos mas de un tipo de dato.
let age: string | number | boolean | object | null;

//Asignando valor de tipo string
age = "27";

//Asignando valor de tipo number
age = 27;

//Asignando valor de tipo boolean
age = true;

//Asignando valor de tipo null
age = null;
age = undefined;

//Asignando valor de tipo objeto
age = {};
age = [];

//Los metodos asignables son los que apliquen para ambos tipos de datos
let conteo: string | number;

//Solo se pueden asignar métodos que funcionen para ambos tipos.
conteo.toString();

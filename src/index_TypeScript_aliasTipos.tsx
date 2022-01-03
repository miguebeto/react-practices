//Creamos el nuevo tipo de dato con el nombre que queremos asignarle.
type Numero = number;

//Le indicamos a la variable que será del tipo creado anterioremente.
let edad: Numero;

//Asignamos el valor correspondiente al tipo de dato creado.
edad = 27;

//Usandolo en union de tipos sería así:
type NumberOrString = number | string;

let age: NumberOrString = 27;
let age2: NumberOrString = "27";

//Usándolo en union de tipos con clases:
class User {
  name: string;
}

class Admin {
  permissions: number;
}

type UserAdmin = User & Admin;

let user: UserAdmin;

//Type Assertion en funciones:
type FunctionString = () => string;

//Haciendo uso del type en otra funcion.
function executor(f: FunctionString) {}
executor(() => "27");

//cuando queremos que un variable pertenezca a dos clases con propiedades diferentes
class User {
  name: string;
}

class Admin {
  permission: number;
  getPermission() {}
}

//aplicamos la intercepcion de tipos
let user: User & Admin; //User&Admin

//Podemos acceder a los metodos y propiedades de las clases sin importar el tipo;
user.name = "miguel";
user.permission = 26;
user.getPermission();
// user = new User(); requiere un type assertions

//Los type assertions cambia el tipo que el compilador les habia dado por defecto.
user = new User() as User & Admin;

interface AxiosSettings {
  url: string;
}

//Utilizamos type assertions para indicarle mediante a la interface que debe tener una propiedad url de tipo string.
const options = {} as AxiosSettings;
options.url = "https://codigofacilito.com";

//Se usa para evitar que los nombres colisionen con los de otros archivos o se repita.
namespace CF {
  //solo las que son declaradas con export podrán ser utilizadas fuera
  export class YouTube {}
  export const url: string = "https://codigofacilito.com";
  const privado: string = "123";
}

//creando una instancia de un namespaces
const video: CF.YouTube = new CF.YouTube();

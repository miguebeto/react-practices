function sumar(v1: number, v2: number): number {
  return v1 + v2;
}

sumar(2, 2);

const sumar2 = (v1: number, v2: number): number => {
  return v1 + v2;
};

sumar2(4, 4);

function opcional(nombre?: string) {
  console.log(nombre);
}

opcional();

function crearUsuario(
  nombre: string,
  apellido: string,
  edad: number = 26
): void {
  //Solo retorna undefined o null
  console.log(`${nombre} ${apellido} ${edad} `);
}

crearUsuario("miguel", "angel", 27);

//Se usa para funciones que no terminan
function arrojarError(): never {}

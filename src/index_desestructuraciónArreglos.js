const personajes = ["Goku", "Vegeta", "Trunks"];

const [, , p3] = personajes;

// console.log(p3);

const retornaArreglo = () => {
  return ["ABC", 123];
};

const [letras, numeros] = retornaArreglo();
// console.log(letras, numeros);

// Tarea
const useState = (valor) => {
  return [
    valor,
    () => {
      console.log("Hola Mundo");
    }
  ];
};

const arr = useState("Goku");
// arr[1]();
// console.log(arr[0])

const [nombre, setNombre] = useState("Goku");
console.log(nombre);
setNombre();

const persona = {
  nombre: "Tony",
  apellido: "start",
  edad: 45,
  clave: "IronMan"
};

// const { nombre, apellido, edad, clave } = persona;

// console.log(nombre);
// console.log(apellido);
// console.log(edad);
// console.log(clave);

const retornaPersona = ({
  nombre,
  apellido,
  edad,
  rango = "capitan",
  clave
}) => {
  // console.log(nombre, apellido, edad, rango, clave);
  return {
    nombreClave: clave,
    anios: edad,
    latlng: {
      lat: 14.1234,
      lng: -12.3255
    }
  };
};

const {
  nombreClave,
  anios,
  latlng: { lat, lng }
} = retornaPersona(persona);

console.log(nombreClave, anios);
console.log(lat, lng);

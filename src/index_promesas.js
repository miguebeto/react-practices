import { getHeroesById } from "./Exportaciones";

const promesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    const heroe = getHeroesById(6);
    heroe ? resolve(heroe) : reject("No se pudo encontrar el heroe");
  }, 2000);
});

promesa
  .then((heroe) => {
    console.log("Heore", heroe.name);
  })
  .catch((err) => console.warn(err));

//pasando el id por parámetro
const getHeroesByIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const heroe = getHeroesById(id);
      heroe ? resolve(heroe) : reject("No se pudo encontrar el heroe");
    }, 2000);
  });
};

getHeroesByIdAsync(1).then(console.log).catch(console.warn);

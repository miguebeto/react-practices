// export default [
export const heroes = [
  {
    id: 1,
    name: "Batman",
    owner: "DC"
  },
  {
    id: 2,
    name: "Spiderman",
    owner: "Marvel"
  },
  {
    id: 3,
    name: "Superman",
    owner: "DC"
  },
  {
    id: 4,
    name: "Flash",
    owner: "DC"
  },
  {
    id: 5,
    name: "Wolverine",
    owner: "Marvel"
  }
];

// const owners = ["DC", "Marvel"];

//o
// export default heroes;
// export { heroes as default, owners };

//Esto va en el index

// import { heroes } from "./heroes";

// const getHeroesById = (id) => {
//  return heroes.find((heroe)=>{
//     if(heroe.id === id){
//       return true
//     }else {
//       return false
//     }
//   })
// }

// const getHeroesById = (id) => heroes.find((heroe) => heroe.id === id);
// console.log(getHeroesById(5));

// const getHeroesByOwner = (owner) => heroes.filter((own) => own.owner === owner);
// console.log(getHeroesByOwner("Marvel"));
// console.log(getHeroesByOwner("DC"));

export const getHeroesById = (id) => heroes.find((heroe) => heroe.id === id);

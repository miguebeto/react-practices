//Son como esqueletos(interfaces), pero con algo de carne. No se pueden instanciar.
//Pueden contener metodos abstractos, que si pueden ser usados en subclases. Estos no deben contener implementación
abstract class Assets {
  //propiedades
  x: number;
  y: number;
  width: number;
  height: number;

  //meotdos no abstractos (con implementación)
  getCoords(): string { return `${this.x}, ${this.y}`;}

  //metodos abtractos (sin implementación)
  abstract move(speed: number): boolean;
}

//Uso de clases abtractas mediante herencia
class Hero extends Assets {
  move(speed: number) {
    return true;
  }
}

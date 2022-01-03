// Interface o esqueleto a seguir por las clases para poder ser comparadas
interface Asset {
  x;
  y;
  width;
  height: number;
  getCoords(): string;
}

//Classes aplicando reglas de la interface establecida;
class Hero implements Asset {
  x: number;
  y: number;
  width: number;
  height: number;
  getCoords(): string {
    return "";
  }
}

class Bullet implements Asset {
  x: number;
  y: number;
  width: number;
  height: number;
  getCoords(): string {
    return "";
  }
}

class Enemy implements Asset {
  x: number;
  y: number;
  width: number;
  height: number;
  getCoords(): string {
    return "";
  }
}

//Instanciando objeto de la clase heroe con la interface
const enemy: Asset = new Enemy();

//Class que compara las otras clases
class Colisions {
  static check(obj: Asset, obj2: Asset) {
    //Validar que exista forma de comparar los elementos
    //Compare obj con obj2
  }
}

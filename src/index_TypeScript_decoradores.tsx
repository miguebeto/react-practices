//El decorador se utiliza mediante una funcion para añadirle funcionalidades en esete caso a una clase
function decorador(cls: Function) {
  console.log("soy un decorador funcionando");
  cls.prototype.className = cls.name;
}

//Le asignamos el decorador a la clase
@decorador
class Speaker {}

//instanciamos el objeto que va a llevar dentro las propiades de la clase y las asignadas por el decorador
const speaker: Speaker = new Speaker();
console.log(speaker.className);

//decoradores de propiedades envian dos argumentos a la funcion decorada.
function decoradorPro(clsProto: any, propertyName: string) {
  console.log("soy un decorador funcionando");
  //ya viene iniciado desde el prototype
  clsProto.className = clsProto.constructor.name;
  console.log(propertyName);
}
//decoradores de propiedades estaticas.
function decoradorProStatic(cls: Function, propertyName: string) {}

//Le asignamos el decorador a la clase
class SpeakerPro {
  @decoradorPro
  numero: number;

  @decoradorProStatic
  static otroPar: string;
}

//instanciamos el objeto que va a llevar dentro las propiades de la clase y las asignadas por el decorador
const speakerpro: SpeakerPro = new SpeakerPro();
console.log(speakerpro.className);

//Las funciones que decoran un metodo reciven 3 argumentos
function Auditable(message: string) {
  return function (clsProto: any, methodName: string, descriptor?: any) {
    //para extraer el valor de la propiedad usamos:
    let originalFunction = clsProto[methodName];

    let decoratedFunction = function () {
      originalFunction();
      console.log(message);
    };
    descriptor.value = decoratedFunction;
    return descriptor;
  };
}

//Le asignamos el decorador a la clase
class SpeakerAuditable {
  @Auditable("oldN está obsoleto, hay que usar n")
  oldN() {
    console.log(10);
  }

  @Auditable("n fué ejecutado")
  n() {
    console.log(20);
  }
}

let speakerAuditable: SpeakerAuditable = new SpeakerAuditable();

speaker.n();
speaker.oldN();

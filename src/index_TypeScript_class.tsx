class Speaker{
  hi(nombre: string){
      console.log(nombre);
  };
};

const speaker: Speaker = new Speaker();
speaker.hi('miguel');

//____________________________________________________________________________________________________

//Adicionando el constructor, el cual debe llevar el parametro cuando instanciamos el objeto.
class Video{
  //propiedades
  title: string;

  //adicionamos el contructor
  constructor(title: string){
      this.title = title;
  };

  //metodos
  printTitle(){ console.log(this.title)};
  changleTitle(title: string){this.title = title};
  getTitle(): string{ return this.title}; 
};

const video: Video = new Video('Youtube');

//llamada a los metodos
video.printTitle(); 
video.changleTitle('Opa ganga style');
video.changleTitle('Vimeo');
console.log(video.getTitle());

//____________________________________________________________________________________________________

class Mivideo {
  //Propiedad
  title: string;
  
  //Constructor
  constructor(title: string){
      this.title = title;
  };

  //metodos
  play(){ console.log('playing')};
  stop(){console.log('stopped')};
};

class YouTubeVideo extends Mivideo{
  //Constructor
  constructor(title: string){
      super(title);
      this.title = title;
  };

  //metodos
  play(){
      super.play(); //llama el metodo play del padre
      console.log('playing a youtube video');
  };
};

//instancia de objeto.
const miVideo : YouTubeVideo = new YouTubeVideo('Tommy009');

//llamando la instancia del objeto con metodos de la clase padre.
miVideo.stop();
// miVideo.play(); 

//llamado luego de alterar/adicionar el metodo que viene del padre
miVideo.play();

//____________________________________________________________________________________________________

class Streaming {
  //propiedades las cuales pueden ser public, private(se puede con metodos get, set) o protected(se puede con subclases) (encapsulación)
  protected title: string;

  //métodos
  constructor(title: string){
      this.title = title;
  };
}

class Streamers extends Streaming {
  printTitle(){console.log(this.title)};
}

//instancia de clase
const streaming: Streaming = new Streaming('twitch');
// console.log(streaming.title);



//____________________________________________________________________________________________________

class Streaming2 {
  //propiedades las cuales pueden ser public, private(se puede con metodos get, set) o protected(se puede con subclases) (encapsulación)
  private _title: string;

  //métodos
  constructor(title: string){
      this.title = title;
  };

  get title(): string{ return this._title};
  set title(title: string){ this._title = title};
};

//instancia de clase
const streaming2: Streaming2 = new Streaming2('twitch');

//los metodos accesores se usan como atributos/propiedades y sus nombres deben ser diferentes así:
streaming2.title = 'live en facebook';

//____________________________________________________________________________________________________


class Requestor {
  //propiedades con static le pertenecen a la clase y no al objeto por lo que no se necesitaria constructor ni usar this
  // se usa para cuando no queremos que las propiedades sean copiadas por cada instancia de clase creada.
  static url: string = 'https://codigofacilito.com';

  //metodos con static le pertenecen a la clase por lo que se pueden acceder sin instanciar objetos de clase
  // constructor(){
  //     this.url = 'https://codigofacilito.com';
  // };
  static getCourses(){
      // console.log(`${this.url}/cursos`);
      console.log(`${Requestor.url}/cursos`);

  };
  static getArticles(){
      // console.log(`${this.url}/articles`);
      console.log(`${Requestor.url}/articles`);

  };
};

//Se pueden llamar los metodos estáticos sin necesidad de instanciar objetos de clase ya que pertenecer a la clase directamente
Requestor.getCourses();
Requestor.getArticles();
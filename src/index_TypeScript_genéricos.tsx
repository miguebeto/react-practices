//Losa genéricos son un tipo de dato flexible que nos permite trabajar con varios tipos de datos, es similar a any el cuál es mala practica.
function genericReceptor<T>(obj: T): T {
    return obj;
};

//Llamando la funcion asignándole el tipo con el que la queremos trabajar, en este caso string.
genericReceptor<string>('miguel');
genericReceptor<number>(27);
genericReceptor<boolean>(true);

//Al asignarlo a una variable y darle un valor, esta debe ser necesariamente del tipo del valor que estamos retornando.
let numero = genericReceptor<string>('miguel');
numero = 'blanco';

//Para el uso de arreglo los usamos de la siguiente manera:
function arreglo<T>(arr: T[]){
    console.log(arr.length);
};

//Ejecutamos la función pasando el array del tipo asignado por parámetro
arreglo<string>(['hola', 'mundo']);
arreglo<number>([2021, 2022, 2023]);
arreglo<boolean>([true, false]);

//En las classe las usamos de la siguiente manera
class Printer<T>{
    arreglo(arr: T[]){
        console.log(arr.length);
    };      
};

//Instanciamos el objeto con el tipo de valor que queremos usar.
let printer: Printer<number> = new Printer();

printer.arreglo([27]);


//Si queremos asignarle al genérico una interface que reciba varios parámetros lo hacemos de la siguiente manera:
interface Assets {
    x, y: number;
};

//Le asignamos el generico que extienda de la interface .
function generic<T extends Assets>(obj: T){};

//Manda un error debido a que no es del tipo asignado en la interface
// generic<number>(20);

//Le asignamos una clase con el tipo que especifica la interface.
class Point {
    x: boolean;
    y: number;

};

//Pasamos por parámeto una instancia de objeto con el generico que especificamos trabajar.
generic<Point>(new Point());



//Si queremos asignarle al genérico una interface que reciba varios parámetros lo hacemos de la siguiente manera:
interface Assets2<T> {
    x, y: number;
    generico: T;
};

//Le asignamos una clase con el tipo que especifica la interface.
class Point2 implements Assets2<string> {
    x: boolean;
    y: number;
    generico: 'miguel';
};

//Le asignamos una clase con el tipo que especifica la interface.
class Point3 implements Assets2<Point2> {
    x: boolean;
    y: number;
    generico: Point2;
};



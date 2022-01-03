//Los enum se utilizan para asignarle nombre a un cojunto de valores que nos permitan identificarlos con mayor facilidad
enum Tallas {chica = 1, mediana = 2, grande = 3};
enum PaymenState {Creado, Pagado, EnDeuda}


class Pedido {
    talla:number;
}

//Creamos una instancia de la clase
let primerPedido : Pedido = new Pedido();

//le asignamos el enum correspondiente a la talla del pedido
primerPedido.talla = Tallas.chica;
console.log( Tallas.chica, Tallas.mediana, Tallas.grande); // 1, 2 3
console.log( PaymenState.EnDeuda); // 2


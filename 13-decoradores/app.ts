/* 
Un decorador es una funcion que se ejectua y expande la funcionalidad de las clases
Angular usa los decoraderos para indicar que nuestras clases sean componentes, etc
angular ya tiene implementados sus propios decoradores, no necesitaremos crearlos
*/

function imprimir(construct:Function) {
    console.log(construct);
}

@imprimir
class Persona {
    constructor(
        public nombre:string,
        public apellido:string,
        public edad:number
    ) {}
}
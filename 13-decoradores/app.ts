/* 
Un decorador es una funcion que se ejectua y expande la funcionalidad de las clases.
Angular usa los decoradores para indicar que nuestras clases sean componentes, etc.
Angular ya tiene implementados sus propios decoradores, no necesitaremos crearlos desde cero.
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

/* 
Para usar decoradores sin complicaciones debemos hacer cambios al documento de configuracion
de typescript y descomentar la siguiente propiedad:
    "experimentalDecorators": true,
*/
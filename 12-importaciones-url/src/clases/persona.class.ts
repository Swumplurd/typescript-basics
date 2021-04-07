/* Para exportar una clase y podamos ocuparla en otro documento de typescript usamos 
la palabra reservada export, esto funciona usando Webpack, cuando usemos angular ya
lo tendremos configurado para que funcione tambien */

export class Persona {
    constructor(
        public nombre:string,
        public apellido:string,
        public edad:number, 
        public apodo?:string
    ) {}

    saludar() {
        console.log(`Hola ${this.nombre}`);
    }
}
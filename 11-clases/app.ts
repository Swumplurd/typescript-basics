(() => {
/* Las clases son una abstraccion de algo que existe en la vida real */

    //Primer forma de crear una clase e instanciarla usando un constructor
    /* class Persona {     //Por convencion clases empiezan con mayuscula
        nombre: string;
        apellido: string;
        edad: number;
        apodo: string;

        constructor(nombre:string, apellido:string, edad:number, apodo:string) {
            // El construcor es una funcion que se ejecuta cuando creamos una nueva instancia de nuestra clase 
            this.nombre = nombre;
            this.apellido = apellido;
            this.edad = edad;
            this.apodo = apodo;
        }
    }
    const persona = new Persona('Fernando', 'Vasquez', 27, 'Fercho');
    consloe.log(persona)
    */

    //Forma simplificada de crear una clase e instanciarla
    class Persona {
        constructor(public nombre:string, public apellido:string, public edad:number, public apodo?:string) {}
    }
    
    const persona = new Persona('Fernando', 'Vasquez', 27, 'Fercho');
    console.log(persona);

})();

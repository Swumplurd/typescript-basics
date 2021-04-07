(() => {
    /* 
    Manera tradicional de usar funciones

    const funcion = function(a:string) {  //Funcion asignada a una variable
        return a;
    }

    function funcion2(a:number) {}
    */

    const miFuncion = (params:string) => {  //En realidad la funcion de flecha nos ahorra escribir la palabra function
        return params;
    }

    const mayus = (palabra:string) => palabra.toUpperCase();    //La funcion de flecha tiene la caracteristica de que si slo retornamos una linea podemos omitir las llaves
    console.log(mayus('minusculas'));

    const persona = {
        nombre: 'Fernando',

        programa() {
            setTimeout(() => {      //Otra caracteristica de las funciones flecha es que no modifican a lo que apunta this
                console.log(`${this.nombre} programa Typescript`);
            }, 5000);
        }
    }

    persona.programa();
})();
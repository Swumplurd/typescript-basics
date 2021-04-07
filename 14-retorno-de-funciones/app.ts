(() => {
    const sumar = (a:number, b:number):number => a + b;     //Si despues de la declaracion de parametros ponemos : y especificamos un dato (params:params):string establecemos que la funcion debe retornar ese tipo de dato

    const nombre = ():string => 'Hola Fernando'

    const salario = ():Promise<number> => {                 //Retortando una Promesa de tipo number, asi evitamos el Promise<unknow> y al especificar el tipo tenemos acceso al autocompletado con funciones propias de ese tipo de dato
        return new Promise((resolve, reject) => {
            resolve(1);
        });
    }

    salario().then( a => console.log(a*100))
})();
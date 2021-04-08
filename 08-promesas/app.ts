(() => {
    /* 
    Las promesas nos sirven para ejecutar un bloque de codigo sin bloquear los demas bloques de codigo de la aplicacion
    */
    console.log('Inicio del programa');

    const prom = new Promise((resolve, reject) => {     //Si quisieramos compilar una promesa para generar un archivo .js tendriamos que apuntar minimo a la versionn del ES2015 en nuestro archivo de configuracion de typescript ya que en versiones inferiores no hay equivalencias a promesas
        setTimeout(() => {
            resolve('Se cumplio la promesa');           //Resolve se usa cuando la promesa se cumple
            //reject('No se cumplio la promesa');       //Reject cuando la promesa no se cumple
        }, 3000);
    });

    prom.then(message => console.log(message));         //Si la respuesta de la promesa fue resolve se usa .then()
    //prom.catch(message => console.log(message));      //Si la respuesta de la pormesa fue reject se usa .catch() y nos sirve para manejo errores

    console.log('Fin del programa');
})();
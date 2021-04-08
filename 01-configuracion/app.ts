/* 
(() => {
    Funcion anonima que se autoinvoca y eso evita que variables, 
    funciones, etc marquen error en nuestros archivos .ts y .js
})(); 
*/
(() => {
    function hola(nombre:string) {
        console.log(`Hola ${nombre}`);
    }

    const persona = {
        nombre: 'Fernando',
        apellido: 'Vasquez',
        sexo: 'Masculino',
        edad: 27
    }

    hola(persona.nombre)
})();
/* 
Para compilar un archivo de typescript tenemos que instalar mediante npm 
el siguiente modulo de manera global

    npm i -g typescript
*/

/* 
Para compilar un archivo typescript usamos el comando 

    tsc nombrearchivo.ts

esto nos creara un archivo .js con el mismo nombre
*/

/* 
Para crear el archivo de configuracion de typescript usamos el comando

    tsc --init

En el archivo de configuracion podemos modificar varias cosas segun necesitemos,
Cuando usemos Angular, este ofrece un archivo de configuracion recomendado
*/

/* 
Una vez creamos el archivo de configuracion podemos usar el modo de observacion de typescript para
que no tengamos que compilar manualmete cada que hagamos un cambio en un archivo. el comando es:

    tsc -w

Con esto cada que guardemos nuestro archivo .ts se aplicara el cambio en nuestro archivo .js
*/
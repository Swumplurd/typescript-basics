(() => {
    /* La diferencia entre decalarar variables con var o con let radica en el scope de 
    cada una de estas y el espacio de memoria que utilizan. */

    /* Scope de var */
    var mensaje = 'Hola mundo desde var';  //al declarar varibles con var reservamos un espacio de memoria para dicha variable

    if (true) {
        var mensaje = 'Adios mundo cruel desde var';   //redefinimos el valor de la variable en el mismo espacio de memoria
    }
    
    console.log(mensaje);   //Muestra por consola 'Adios mundo cruel desde var'

    /* Scope de let */
    let nota = 'Hola mundo desde let';  //El scope de este let esta solo disponible en la funcion que lo contiene pero no dentro del if por lo cual cada let declarado ocupa un espacio de memoria independiente

    if (true) {
        let nota = 'Adios mundo cruel'  //El scope de este let esta solo disponible dentro del if
    }

    console.log(nota);  //Muestra por consola 'Hola mundo desde let'

    /* Const */
    const PI = 3.1416;  //Por convencion las constantes se escriben en mayusculas, ocupan un espacio de memoria y son mas ligeras incluso que var, puesto que no tienen mas metodos asociados

    if (true) {
        const PI = 'hola';  //El scope de las const es similar a let, lo que no podremos hacer es reasignar un valor a una constante.
        //PI = 'adios'      //Esto no puede hacerse
        console.log(PI);    //Muestra 'hola' en consola
    }

    console.log(PI);        //Muestra 3.1416 en consola
})();
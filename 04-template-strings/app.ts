(() => {
    const nombre = 'Fernando';
    const apellido = 'Vasquez';
    const edad = 26;

    /* 
    Las template strings nos sirven para hacer inyeccion de variables en una string de una manera bastante comoda 
    Dentro de las template strings podemos realizar procesos como operaciones o mandar a llamar funciones como se
    observa en Edad
    */
    const salida = `Nombre: ${nombre} \nApellido: ${apellido} \nEdad: ${edad + 1}`  
    console.log(salida);
})();
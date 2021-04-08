(() => {
    let mensaje = 'Hola';   //En Typescript cuando inicializamos una variable, esta variable solo podra tomar valoes de el tipo de dato que hallamos definido
    //mensaje = 123;        //Maracaria error puesto que lo redefinimos con un tipo de dato string
    mensaje = 'Adios';      //Se puede redefinir siempre y cuando asignemos una string al valor de la variable.

    /* Tambien podemos establecer que tipo de dato va a recibir cada variable */
    let cadena : string;
    let numero : number;
    let boleano : true;

    let cualquiera : any;   //El tipo any puede recibir cualquier tipo de dato

    let varios : string | number;   //Con el operador | podemos establecer que una variable reciba de dos o mas tipos

    let persona = {     //Cuando declaramos un objeto, las llaves seran bloqueadas con el tipo de dato del valor que definamos
        nombre: 'Fernando',
        edad: 27
    }

    persona = {
        nombre: 'Ana',  //Solo acepta string
        edad: 26        //Solo acepta number
    }
})();
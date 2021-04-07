(() => {
    /* 
    La desestructuracion de objetos se refiere a extraer las porpiedades de un objeto de una manera
    mas sencilla a la que normalmente lo hacia
    */

    //Desestructuracion de objetos
    const persona = {
        nombre: 'Fernando',
        apellido: 'Vasquez',
        edad: 27
    }

    //Manera convencional de extraer las porpiedades de un objeto
    console.log(persona.nombre);
    console.log(persona.apellido);
    console.log(persona.edad);

    //Desestructurando el objeto
    const {nombre, edad} = persona;    //De esta manera extraemos las porpiedades indicadas y al mismo tiempo creamos constantes que las contengan; en la desestructuracion de objetos el orden de las constantes no importa al momento de extraerlas
    console.log(nombre);
    console.log(edad);

    /* 
    La desestructuracion tambien puede ocurrir como argumento de una funcion
    */
    const extraer = ({nombre, apellido}:any) => {
        console.log(nombre);
        console.log(apellido);
    }
    extraer(persona);


    //Desestructuracion de arreglos
    const canales:string[] = ['Error de capa 8', 'Code to me', 'Facultad autodidacta'];

    //La manera tradicional para extraer los elementos de un arreglo
    console.log(canales[0]);
    console.log(canales[1]);
    console.log(canales[2]);

    //Desestructurando un arreglo
    const [canal1, ,canal3] = canales;  //Al momento de extraer de esta forma, si no nos interesa extaer algun elemento lo indicamos con un espacio vacio
    console.log(canal1);
    console.log(canal3);

    /* 
    La desestructuracion tambien puede ocurrir como argumento de una funcion
    */
    const elementos = ([canal1, canal2, canal3]:string[]) => {
        console.log(canal1);
        console.log(canal2);
        console.log(canal3);
    }
    elementos(canales);
})();
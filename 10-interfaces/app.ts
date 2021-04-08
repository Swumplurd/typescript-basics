(() => {
    /* 
    Las interfaces son las reglas que queremos que cumpla un objeto,
    es una forma de asegurarnos que los valores asociados a las llaves
    van a ser del tipo que nosotros esperamos que sean
    */
    interface persona {     //Las interfaces son puramente de typescript, al transpilar a JS no tendremos la interfaz
        nombre: string,     //Los objetos que creemos con la interface persona deben de cumplir tener una llave llamada nombre que reciba una string y una llave edad que reciba un numero
        apellido?: string,  //Podemos tener llaves opcionales
        edad: number
    }

    const soldado:persona = {   //especificamos que el objeto 'soldado' utilizara la interfaz 'persona'
        nombre: 'Fernando',
        edad: 27
    }

    const saludar = ({nombre}:persona) => {     //Usando desestructuracion de objeto para extraer nombre
        console.log(`Saludando a ${nombre}`);
    }

    saludar(soldado)
})();
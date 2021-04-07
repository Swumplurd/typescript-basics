(() => {
    /* Las interfaces son las reglas que queremos que cumpla un objeto*/
    interface persona {     //Las interfaces son puramente de TS, al transpilar a JS no tendremos la interfaz
        nombre: string,     //Los objetos que creemos con la interface persona deben de cumplir tener una llave llamada nombre que reciba una string y una llave edad que reciba un numero
        apellido?: string,  //Podemos tener llaves opcionales
        edad: number
    }

    const soldado:persona = {
        nombre: 'Fernando',
        edad: 27
    }

    const saludar = ({nombre}:persona) => {     //Usando desestructuracion de objeto para extraer nombre
        console.log(`Saludando a ${nombre}`);
    }

    saludar(soldado)
})();
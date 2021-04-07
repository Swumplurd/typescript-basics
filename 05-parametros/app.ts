(() => {

    /* 
    En Typescript existen tres tipos de argumentos, los obligatorios, los opcionales y los default
    Se recomienda poner los parametros obligatorios al principio, los opcionales despues y al final los por default

    Obligatorios
    function test(obligatorio: string) {}

    Opcionales
    function test(opcional?: string) {}

    Default
    function test(default: string = 'default')
    */

    function activar(quien: string, objeto: string = 'Boton', momento?: string) {

        if (momento) {
            console.log(`${quien} activo el ${objeto} ${momento}`);
        } else {
            console.log(`${quien} activo el ${objeto}`);
        }
    }

    activar('Fernando', 'Motor');
})();
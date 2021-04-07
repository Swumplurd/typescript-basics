(() => {
    var dineroBanco:number = 1600;

    const retirar = (disponible:number, retiro:number): Promise<string> => {    //Promise<string> establecemos el tipo de retorno de la promesa cuando se cumple, estro evita el tipo <unknow>
        return new Promise((resolve, reject) => {
            if (retiro > disponible) {
                reject('Saldo insificiente')
            } else {
                dineroBanco -= retiro;
                resolve(`Retiraste: ${retiro}\nTu saldo actual es ${dineroBanco}`)
            }
        });
    }

    retirar(dineroBanco, 9999)
        .then(message => console.log(message))
        .catch(message => console.warn(message))
})();
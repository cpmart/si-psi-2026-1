const promessa = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Resultado recebido com sucesso');
    }, 2000);
});

promessa.then(resultado => {
    console.log(resultado);
});
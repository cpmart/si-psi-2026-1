const promessaComErro = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('Algo deu errado');
    }, 2000);
});

promessaComErro
    .then(resultado => console.log(resultado))
    .catch(erro => console.error(erro));
async function testarErro() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/rota-inexistente');

        if (!response.ok) {
            throw new Error('Erro HTTP: ' + response.status);
        }

        const data = await response.json();
        console.log(data);
    } catch (erro) {
        console.error('Falha capturada:', erro.message);
    }
}

testarErro();
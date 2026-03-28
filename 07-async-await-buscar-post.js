async function buscarPost() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');

        if (!response.ok) {
            throw new Error('Erro na requisição');
        }
        const data = await response.json();
        console.log(data);
    } catch (erro) {
        console.error('Erro:', erro.message);
    }
}

buscarPost();

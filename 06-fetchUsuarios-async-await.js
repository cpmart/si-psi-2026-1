async function fetchUsuarios() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');

        if (!response.ok) {
            throw new Error('Não foi possível obter os usuários');
        }

        const data = await response.json();
        console.table(data);
    } catch (error) {
        console.error('Erro:', error.message);
    }
}

fetchUsuarios();
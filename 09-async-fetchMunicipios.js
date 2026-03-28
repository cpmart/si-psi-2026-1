async function fetchMunicipios() {
    try {
        const response = await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/municipios');

        if (!response.ok) {
            throw new Error('Erro ao consultar municípios');
        }

        const data = await response.json();
        console.table(data.slice(0, 5));
    } catch (error) {
        console.error('Erro:', error.message);
    }
}

fetchMunicipios();

// Exercício — Agenda de Contatos
// Escreva sua solução abaixo

let contatos = [];

// 1. Adicione 5 nomes ao final com push()
contatos.push('A')
contatos.push('B')
contatos.push('C')
contatos.push('D')
contatos.push('E')

// 2. Remova o último com pop() e exiba o nome removido
contatos.pop()


// 3. Adicione um contato urgente no início com unshift()
contatos.unshift('F')

// 4. Remova o primeiro com shift() e exiba-o
console.log(contatos.shift())

// 5. Exiba o total de contatos restantes
console.log('Contatos restantes:', contatos.length);
console.log('Lista final:', contatos);
// Exercício — Extrator de Dados de String

const frase = 'JavaScript é uma linguagem incrível';
const data = '25/04/2025';

// 1. Divida a frase em palavras
palavras = frase.split(" ")

// 2. Una com traço
console.log( palavras.join('-'));

// 3. Inverta e rejunte
console.log(palavras.reverse().join(" "));


// 4. Divida a data e exiba partes
partes = data.split('/')
console.log(partes);


// 5. Reconstrua no formato aaaa-mm-dd
console.log(partes.reverse().join('/'));

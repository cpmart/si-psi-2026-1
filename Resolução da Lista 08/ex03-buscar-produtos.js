// Exercício 03 — Buscador de Produtos

// 1. Array de nomes de produtos
const nomeProdutos = ['Monitor', 'Teclado', 'Mouse', 'Headset', 'Webcam', 'Hub USB'];

// 2. Verifique com includes()
let nomeProdutosMinusculo = nomeProdutos.map((a)=>a.toLowerCase())
console.log(nomeProdutosMinusculo);
console.log(nomeProdutosMinusculo.includes('Teclado'.toLowerCase()));

// 3. Posição do Mouse com indexOf()
console.log(nomeProdutosMinusculo.indexOf('Mouse'.toLowerCase()));


// 4. Array de objetos e find()
const produtos = [
  { nome: 'Monitor', preco: 850 },
  { nome: 'Teclado', preco: 95 },
  { nome: 'Mouse', preco: 120 },
  { nome: 'Headset', preco: 75 },
  { nome: 'Webcam', preco: 230 },
];

// 5. findIndex()


// 6. Produto inexistente — trate undefined

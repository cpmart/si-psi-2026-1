const estudantes = [
    { nome: "João",   idade: 50, nota: 5.9 },
    { nome: "Pietra", idade: 21, nota: 10.0 },
    { nome: "Diego",  idade: 18, nota: 9.0 }
];

let resultado1 = estudantes.filter(a => a.idade > 15 && a.nota > 6).map(a => `${a.nome} - Aprovado`);
console.log(resultado1);


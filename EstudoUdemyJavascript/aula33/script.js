/*
PRIMITIVOS = STRING, NUMBER, BOOLEAN, UNDEFINED, NULL (NNIGINT, SYMBOL)
REFERENCIA (MUTAVEIS) = ARRAY, OBJECT, FUNCTION
*/

/*
let nome = 'luiz';
nome = 'otavio';
console.log(nome[0]);
*/

const a = {
    nome: 'luiz',
    sobrenome: 'Leite'
};

const b = a;
console.log(b);

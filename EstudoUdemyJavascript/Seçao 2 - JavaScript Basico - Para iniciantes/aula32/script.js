/*
function criaPessoa(nome, sobrenome, idade){
    return{nome, sobrenome, idade};
}

const pessoa1 = criaPessoa('Daniel', 'Leite', 21);
const pessoa2 = criaPessoa('joao', 'carlos', 22);
const pessoa3 = criaPessoa('pedro', 'arruda', 24);

console.log(pessoa1.nome, pessoa2.nome, pessoa3.nome);
*/

const pessoa1 = {
    nome: 'Daniel',
    sobrenome: 'Leite',
    idade: 21,

    fala(){
        console.log(`${this.nome} ${this.sobrenome} ${this.idade}`);
    },

    incremenetaIdaded(){
        this.idade++;
    }
};

pessoa1.fala();
pessoa1.incremenetaIdaded();
pessoa1.fala();
pessoa1.incremenetaIdaded();
pessoa1.fala();
pessoa1.incremenetaIdaded();
pessoa1.fala();


// Criando Objetos e Classes em JavaScript
// Entendendo classes

class Pessoa {
    nome;
    idade;
    anoDeNascimento;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2023 - idade;
    };

    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
};

const joao = new Pessoa('João Vitor', 48);
console.log(joao);
joao.descrever();


const vitor = new Pessoa();
vitor.nome = 'Vitor José';
vitor.idade = 25;
vitor.descrever();
console.log(vitor);

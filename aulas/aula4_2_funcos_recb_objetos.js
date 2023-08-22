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


function compararPessoas(p1, p2) {
    if (p1.idade > p2.idade) {
        console.log(`${p1.nome} é mais velho que ${p2.nome}`);
    } else if (p2.idade > p1.idade) {
        console.log(`${p2.nome} é mais velho que ${p1.nome}`);
    } else {
        console.log(`${p2.nome} e ${p1.nome} tem a mesma idade`);
    }
};


const vitor = new Pessoa('Vitor', 28);
const joao = new Pessoa('João', 26);

compararPessoas(vitor, joao);
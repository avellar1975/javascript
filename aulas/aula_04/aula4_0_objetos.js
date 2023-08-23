// Criando Objetos e Classes em JavaScript
// Entendendo objetos

const evandro = {
    nome: 'Evandro Avellar',
    idade: 48,
    altura: 1.75,
};

console.log(evandro.nome);
console.log(evandro.idade);
console.log(evandro);

evandro.peso = 88.5;

console.log(evandro);

delete evandro.idade;

console.log(evandro);

// Métodos e atributos

const pessoa = {
    nome: 'Vitor',
    idade: 25,
    descrever: function() {
        // Envolver a string entre crases
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`); 
    }
};

pessoa.descrever();

// Outra forma de acessar atributos de objetos

console.log(pessoa['nome']);
pessoa['idade'] = 48;

console.log(pessoa);




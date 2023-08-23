/* Exercício 01

Criar uma classe para representar pessoas
- Pessoas possuem um nome, peso e altura
- as pessoas precisam saber qual o IMC (peso / (altura * altura))
- Criar instancia JOSE, 70kg, 1,75 metros e calcule o IMC



*/

class Pessoas {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura; 
    }

    calcularIMC() {
        return (this.peso / (this.altura * this.altura))
    }

    classificarIMC() {
        const IMC = this.calcularIMC();
        if (IMC < 18.5) {
            return 'Abaixo do peso';
        } else if (IMC >= 18.5 && IMC < 25) {
            return 'Peso Normal';
        } else if (IMC >= 25 && IMC < 30) {
            return 'Acima do peso';
        } else if (IMC >= 30 && IMC < 40) {
            return 'Obeso';
        } else {
            return 'Obsidade grave';
        }
    }
};

// Criar a instancia (Objeto)

evandro = new Pessoas('Evandro Avellar', 88.5, 1.75);

imc = evandro.calcularIMC();

console.log(imc.toFixed(2));

classificacao = evandro.classificarIMC();
console.log(classificacao);

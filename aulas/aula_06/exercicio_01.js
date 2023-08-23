const {gets, print} = require('./funcoes_auxiliares');

/* Maior número sorteado
Faça um programa que receba 5 números e mostre o maior deles

Dados de entradda:

5
50
10
98
23

*/
let maior = 0;

for (let i = 0; i < 5; i++) {
    numero = gets();
    if (numero > maior) {
        maior = numero;
    } else {
        maior = maior;
    }
}
print(maior);

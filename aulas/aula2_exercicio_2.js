/*
Fórmula do IMC
IMC = peso / (altura * altura)

Dado o peso e altura mostre sua condiçao conforme relação abaixo:

- abaixo de 18.5 -> Abaixo do peso
- entre 18.5 e 25 -> Peso Normal
- entre 25 e 30 -> Acima do peso;
- entre 30 e 40 -> Obeso;
- acima de 40 -> Obsidade grave


*/

const peso = 76.58;
const altura = 1.75;

const IMC = peso / Math.pow(altura, 2);

console.log(IMC.toFixed(2));

if (IMC < 18.5) {
    console.log('Abaixo do peso');
} else if (IMC >= 18.5 && IMC < 25) {
    console.log('Peso Normal');
} else if (IMC >= 25 && IMC < 30) {
    console.log('Acima do peso');
} else if (IMC >= 30 && IMC < 40) {
    console.log('Obeso');
} else {
    console.log('Obsidade grave');
}
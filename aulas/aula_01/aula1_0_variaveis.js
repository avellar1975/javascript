/*
Variáveis e Operadores
- Constantes
- Variáveis
- Operadores
*/

// Imprimir um texto
console.log('Olá mundo');

// variaveis e constantes
let variavel = 10;
const pi = 3.14;

console.log(variavel)
variavel = 20;
console.log(variavel)
// pi = 9; -> Error: Assignment to constant variable
console.log(pi);


// Operadores
variavel = variavel + 10
console.log(variavel)

let x = (10 * 8 - 3) / 4;
console.log(x)

/* Desafio

Faça um programa para calcular o valor gasto em uma viagem de combustível
- Preço do combustível
- Gasto médio por km
- Distancia da viagem

Imprimir o resultado
*/
console.log('Desafio:');

const precoCombustivel = 5.3;
const gastoMedioKm = 9.0;

// km para o trabalho, ida e volta, 6 dias por semana
let distancia = 14 * 2 * 6; 
let valorGasto = 0;

valorGasto = (distancia / gastoMedioKm) * precoCombustivel;

console.log(valorGasto.toFixed(2));
/*
Faça um programa para calcular o valor de uma viagem

Você terá 5 variáveis. Sendo elas:
1 - Preço do etanol;
2 - Preço da gasolina;
3 - O tipo de combustível que está no seu carro;
4 - Gasto médio de combustível do carro por km;
5 - Distância em km da Viagem.

Imprimir no console o valor que será gasto para realizar a viagem.
*/


const precoEtanol = 3.81;
const precoGasolina = 5.58;
let tipoCombustivel = 'etanol'; // [etanol, gasolina]
const gastoMedioEtanol = 6.8;
const gastoMedioGasolina = 9.7;
let distanciaViagem = 32 * 5;


if (tipoCombustivel == 'etanol') {
    console.log('Valor gasto com', tipoCombustivel)
    let valorGasto = ((distanciaViagem / gastoMedioEtanol) * precoEtanol).toFixed(2)
    console.log(valorGasto)
} else {
    console.log('Valor gasto com', tipoCombustivel)
    let valorGasto = ((distanciaViagem / gastoMedioGasolina) * precoGasolina).toFixed(2)
    console.log(valorGasto)}
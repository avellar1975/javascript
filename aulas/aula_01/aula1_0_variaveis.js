/*
Variáveis e Operadores
- Constantes
- Variáveis
- Operadores

JavaScript is a case-sensitive language.

JavaScript types can be divided into two categories: primitive types and
object types.

JavaScript’s primitive types include numbers, strings of
text (known as strings), and Boolean truth values (known as booleans).

The special JavaScript values null and undefined are primitive
values, but they are not numbers, strings, or booleans.

An ordinary JavaScript object is an unordered collection of named values

Um identificador deve começar com uma letra, um sublinhado (_) ou um cifrão ($).
Identificador = names of constants, variables, functions, or classes
*/

// Qualquer coisa após barras duplas é um comentário.

// Variáveis são declaradas com a palavra-chave let:
let y;

// Valores podem ser atribuídos a variáveis com um sinal =
y = 0; // Agora a variável y tem o valor 0

// JavaScript suporta vários tipos de valores
y = 1; // Números.

y = 0.01; // Os números podem ser inteiros ou reais.

y = "olá mundo"; //Sequências de texto entre aspas.

y = 'JavaScript'; // Aspas simples também delimitam strings.

y = true; // Um valor booleano.

y = false; // O outro valor booleano.

y = null; // Null é um valor especial que significa "sem valor".

y = undefined; // Indefinido é outro valor especial como null.


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

console.log("\u{1F600}");  // Prints a smiley face emoji
// JavaScript também suporta arrays (indexados numericamente listas) de valores:


let primes = [2, 3, 5, 7]; // An array of 4 values, delimited with [ and ].

console.log(primes[0]);
console.log(primes.length);
primes[4] = 9;
console.log(primes);
primes[4] = 11; 
console.log(primes);
let empty = [];
console.log(empty.length);


const lista = [1, 2, 3, 'Nome'];


console.log(lista[3]);

// Adicionar itens

// Na última posição
lista.push('Evandro');

console.log(lista);

// Substituindo um valor
lista[2] = 'Novo';

console.log(lista);

// Apagar o último

lista.pop();

console.log(lista);

// Apagar o primeiro

lista.shift();

console.log(lista);

// tamanho do array
console.log(lista.length)

// Ordenação
let palavras =  ['banana', 'amora', 'melão'];
palavras.sort();
console.log(palavras);
palavras.reverse();
console.log(palavras);
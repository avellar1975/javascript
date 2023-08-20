// Estruturas condicionais

const eAzul = true;
const eVermelho = false;
// Negação 
console.log(!eAzul)



const numero = 0;
const numeroPar = (numero % 2) === 0; // para não ignorar o tipo

console.log(numeroPar)

// If e Else
if (numeroPar) {
    console.log('É um número par!')
} else {
    console.log('Número ímpar!')
}

// If e Else if
if (numero === 0) {
    console.log('Número inválido')
} else if (numeroPar) {
    console.log('É um número par!')
} else {
    console.log('Número ímpar!')
}



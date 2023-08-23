

// Estrutura for
/*

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}

*/

const lista = [1, 2, 3, 4, 5, 6];

for (let index = 0; index < lista.length; index++) {
    const element = lista[index];
    console.log(element);
};


// Strings são arrays de carecteres

const nome = 'Evandro Ferreira de Avellar';

for (let i = 0; i < nome.length; i++) {
    const element = nome[i];
    console.log(element);
    
};

// exemplo de calculo de média utilizando o for

const notas = []

notas.push(5);
notas.push(7);
notas.push(8);
notas.push(2);
notas.push(5);
notas.push(8);

let soma = 0;

for (let i = 0; i < notas.length; i++) {
    const element = notas[i];
    soma = soma + element;    
}

const media = soma / notas.length;

console.log(media);


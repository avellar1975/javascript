/*
Faça um algoritmo que dadas 3 notas de um aluno, calcule e imprima a sua média
e a sua classificação conforme tabela abaixo:

Classificação
- Menor que 5, reprovação
- Entre 5 e 7, recuperação
- Acima de 7, passou de semestre

*/

let nota_1 = 5.8;
let nota_2 = 6.0;
let nota_3 = 9.9;


let media = (nota_1 + nota_2 + nota_3) / 3;
console.log('Média: ', media.toFixed(2))

if (media < 5) {
    console.log('Reprovado');
} else if (media >= 5 && media <= 7) {
    console.log('Em recuperação');
} else {
    console.log('Aprovado')
}
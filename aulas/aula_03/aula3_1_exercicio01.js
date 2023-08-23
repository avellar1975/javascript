
function escrevaMeuNome(nome) {
    console.log('Meu nome é', nome);    
}


function verificaIdade(ano) {
    const ano_atual = 2023;
    let idade = ano_atual - ano;
    return idade;
}


escrevaMeuNome('Evandro');

idade = verificaIdade(1975);
console.log(idade);
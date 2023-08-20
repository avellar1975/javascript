// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente e têm as seguintes funcionalidades: 
// - "gets" : lê UMA linha com dados de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente;
// Abaixo segue o template de código para este desafio, o qual pode ou não utilizar tais funções.

let T = parseInt(gets());

const viloes = [];


// TODO: Com base na quantidade de vilões (T), imprima um 'Y' para cada um deles.
// Para isso, use uma estrutura de repetição e a função global "print" (que já pula linha).

for (passo = 0; passo < T; passo++) {
  vilao = gets();
  viloes.push(vilao);
}

print(viloes)

for (passo = 0; passo < T; passo++) {
  print("Y");
}
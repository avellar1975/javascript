
const funcoes = require('./funcoes_auxiliares');

console.log(funcoes);
console.log(funcoes.gets());

// Com super sintaxe
const {gets, print} = require('./funcoes_auxiliares');

print('Olá mundo');
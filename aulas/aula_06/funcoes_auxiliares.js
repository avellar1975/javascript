const entradas = [ 5, 500, 10, 98, 23 ];
let i = 0;

function print(texto) {
    console.log(texto);
}

function gets() {
    const valor = entradas[i];
    i++;
    return valor;
}

module.exports = {
    gets,
    print
};


function teste(x, y) {
    console.log('Parâmetro x: ',x);
    console.log('Parâmetro y: ',y);
}


teste(3, 'palavra');
teste(10.3, 5.6);


function incrementarJuros(x, y) {
    perct = y / 100
    valor = x * (perct + 1);
    return valor;
}

console.log(incrementarJuros(100, 15))

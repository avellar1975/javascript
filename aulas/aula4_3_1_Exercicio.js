/* Exercício 01

Criar uma classe para representar um carro
- Carros possuem uma marca, cor e gasto médio por km
- a classe terá um método para calcular o gasto, dado a kilometragem e o preço da gasolina


*/

class Carro {
    marca;
    cor;
    gastoMedioPorKm;

    constructor(marca, cor, gastoMedioPorKm) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm; 
    }

    calcularGasto(km, preco) {
        return this.gastoMedioPorKm * km * preco
    }
};

// Criar a instancia (Objeto)

fusca = new Carro('Volks', 'verde', 1/9);

gasto = fusca.calcularGasto(160.0, 5.8);

console.log(fusca)

console.log(gasto);

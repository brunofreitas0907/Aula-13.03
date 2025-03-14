/*Crie uma classe Carro com propriedades como modelo, cor, e ano. Adicione um
método mostrarDetalhes que exiba as informações do carro.

------------------------------------------------------------------------------------*/

// classe do carro com suas propriedades
class Carro
{
    constructor(modelo, cor, ano)
    {
        this.modelo = modelo;
        this.cor = cor;
        this.ano = ano;
    }
    
    // irá mostrar os detalhes do carro de forma ordenada
    mostrarDetalhes()
    {
        return `O carro descrito é um ${this.modelo}, na cor ${this.cor} e o ano é ${this.ano}!`;
    }
}

// irá declarar valores às propriedades do carro
var informações = new Carro(`porsche`, `azul`, 2025);

// irá mostar o resultado final na tela para o usuário
console.log(informações.mostrarDetalhes());
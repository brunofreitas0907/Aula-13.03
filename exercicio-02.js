/*Crie uma classe Estoque que contém um método para adicionar e subtrair
quantidade de produtos. Use try-catch para garantir que a quantidade não se torne
negativa.*/

class Estoque 
{
    constructor(quantidadeProduto)
    {
        this.quantidadeProduto = quantidadeProduto;
    }

    adicionarProdutos()
    {
        this.quantidadeProduto += quantidadeAleatória;
        return this.quantidadeProduto;
    }

    removerProdutos()
    {
        try
        {
            this.quantidadeProduto -= quantidadeAleatória
            return this.quantidadeProduto;
        }catch{
            console.log(`Deu erro DENOVOOOOOO`);
        }
    }
}

var estoqueProdutos = new Estoque (50);
var quantidadeAleatória = Math.floor(Math.random()*10);

console.log(`Ao adicionar produtos seu estoque atual será de ${estoqueProdutos.adicionarProdutos()}`);
console.log(`Ao remover produtos seu estoque atual será de ${estoqueProdutos.removerProdutos()}`);
console.log(`O número sorteado foi o = ${quantidadeAleatória}`)
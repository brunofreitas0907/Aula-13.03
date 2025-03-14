/*Crie uma classe Estoque que contém um método para adicionar e subtrair
quantidade de produtos. Use try-catch para garantir que a quantidade não se torne
negativa.*/

class Estoque 
{
    constructor(quantidadeProduto)
    {
        this.quantidadeProduto = quantidadeProduto;
    }

    adicionarProdutos(quantidadeAleatória)
    {
        this.quantidadeProduto += quantidadeAleatória;
        return this.quantidadeProduto;
    }

    removerProdutos(quantidadeAleatória)
    {
        try
        {
            if(quantidadeAleatória > this.quantidadeProduto)
            {
                return `Não é possível remover ${quantidadeAleatória} unidades, pois o estoque atual é de ${this.quantidadeProduto} unidades.`;
            }
            else
            {
                this.quantidadeProduto -= quantidadeAleatória;
                return `Ao remover produtos seu estoque atual será de ${this.quantidadeProduto} produtos!`;
            }
            
        }
        catch
        {
            console.error(`Deu erro DENOVOOOOOO ${error});
            }` );
        }
    }
}

var estoqueProdutosRemove = new Estoque (2);
var estoqueProdutos = new Estoque (50);
var quantidadeAleatória = Math.floor(Math.random()*10);

console.log(`Ao adicionar produtos seu estoque atual será de ${estoqueProdutos.adicionarProdutos(quantidadeAleatória)} produtos!`);
console.log(estoqueProdutosRemove.removerProdutos(quantidadeAleatória));
console.log(`\nA quantidade sorteada foi de = ${quantidadeAleatória} produtos!`);
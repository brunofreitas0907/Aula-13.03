/*Crie uma classe Estoque que contém um método para adicionar e subtrair
quantidade de produtos. Use try-catch para garantir que a quantidade não se torne
negativa.

------------------------------------------------------------------------------------*/

// classe para o estoque com suas propriedades
class Estoque 
{
    constructor(quantidadeProduto)
    {
        this.quantidadeProduto = quantidadeProduto;
    }

    // irá adicionar uma quantidade aleatória de produtos à quantidade atual
    adicionarProdutos(quantidadeAleatória)
    {
        this.quantidadeProduto += quantidadeAleatória;
        return this.quantidadeProduto;
    }

    // irá remover uma quantidade aleatória de produtos à quantidade atual
    removerProdutos(quantidadeAleatória)
    {
        // irá testar o primeiro bloco e se não for possível executar, mostrará o erro na tela, e seguirá
        try
        {
            // irá verificar se a quantidade sorteada não é superior a quantidade atual de produtos
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

// variáveis para remover, adicionar e gerar um valor aleatório entre 0 e 9
var estoqueProdutosRemove = new Estoque (2);
var estoqueProdutos = new Estoque (50);
var quantidadeAleatória = Math.floor(Math.random()*10);

// irá mostrar na tela para o usuário o resultado final, ao adicionar e remover produtos e também o número sorteado
console.log(`Ao adicionar produtos seu estoque atual será de ${estoqueProdutos.adicionarProdutos(quantidadeAleatória)} produtos!`);
console.log(estoqueProdutosRemove.removerProdutos(quantidadeAleatória));
console.log(`\nA quantidade sorteada foi de = ${quantidadeAleatória} produtos!`);
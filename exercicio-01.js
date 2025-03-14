/* Crie uma classe Produto com propriedades nome, preco e desconto. Crie um
método para calcular o preço com desconto, e use try-catch para capturar erros se o
desconto for maior que 100%.

------------------------------------------------------------------------------------*/

// classe para o produto com suas propriedades
class Produto {
    constructor (nome, preco, desconto)
    {
        this.nome = nome;
        this.preco = preco;
        this.desconto = desconto;
    }

    // função para calcular o valor do produto com desconto
    precoDesconto()
    {
        try{
            valorComDesconto = (this.preco - this.desconto)
            return valorComDesconto;
        } catch
        {
        console.log(`Houve um erro`);
        }
    
    }
}

// declaração de valores para as propriedades da classe
var valores = new Produto(`pastel` , 65.35 , 50);
var valorComDesconto = valores.precoDesconto();

// irá verificar se o valor do desconto é superior ou inferior ao valor do produto
if(valorComDesconto < 0)
{
    console.log(`O desconto de R$ ${valores.desconto}, foi maior que o preço do produto de R$ ${valores.preco}`);
    console.log(`\n\n Portanto, você terá um prejuízo de R$${valores.precoDesconto()}`);
} else
{
    console.log(`O valor total do produto com desconto será de R$ ${valores.precoDesconto().toFixed(2)}`);
}
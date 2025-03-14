/* Crie uma classe Produto com propriedades nome, preco e desconto. Crie um
método para calcular o preço com desconto, e use try-catch para capturar erros se o
desconto for maior que 100%.*/

class Produto {
    constructor (nome, preco, desconto)
    {
        this.nome = nome;
        this.preco = preco;
        this.desconto = desconto;
    }

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

var valores = new Produto(`pastel` , 65.35 , 50);
var valorComDesconto = valores.precoDesconto();

if(valorComDesconto < 0)
{
    console.log(`O desconto de R$ ${valores.desconto}, foi maior que o preço do produto de R$ ${valores.preco}`);
    console.log(`\n\n Portanto, você terá um prejuízo de R$${valores.precoDesconto()}`);
} else
{
    console.log(`O valor total do produto com desconto será de R$ ${valores.precoDesconto().toFixed(2)}`);
}
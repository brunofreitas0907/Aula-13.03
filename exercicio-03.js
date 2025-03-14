/*Crie uma classe ContaBancária que possui métodos para depósito e saque. Use try-
catch para capturar erros, como tentar sacar mais do que o saldo disponível.

------------------------------------------------------------------------------------*/

// classe para uma conta bancária com suas propriedades
class ContaBancaria
{
    constructor(saldoConta, saque)
    {
        this.saldoConta = saldoConta;
    }

    // irá calcular o saldo atual após o depósito de um valor aleatório
    depositar(valorAleatório)
    {
        this.saldoConta += valorAleatório;
        return `Com o valor adicionado, seu saldo atual é de ${this.saldoConta} reais!`;
    }

    // irá calcular o valor atual após o saque de um valor aleatório
    saque(valorAleatório)
    {
        // irá testar a função, caso de errado, mostrará o erro na tela
        try
        {
            if(valorAleatório > this.saldoConta)
            {
                return `Não é possível sacar ${valorAleatório} reais, pois seu saldo atual é de ${this.saldoConta} reais!`;
            }
            else
            {
                this.saldoConta -= valorAleatório;
                return `Você sacou o valor de ${valorAleatório} reais, seu saldo atual é de ${this.saldoConta} reais!`;
            }
        }
        catch
        {
            console.error(`Ocorreu o seguinte erro ao executar: ${error}`);
        }
            
    }
}

// variáveis do valor do depósito, valor do saque e para gerar um valor aleatório entre 1 e 999
var valorDepositar = new ContaBancaria(100.00);
var valorSaque = new ContaBancaria(100.00);
var valorAleatório = Math.floor(Math.random() * 1000);

// irá mostar na tela para o usuário os valores finais, após o depósito, saque e por fim, o valor sorteado
console.log(valorDepositar.depositar(valorAleatório));
console.log(valorSaque.saque(valorAleatório));
console.log(`\n\n O valor sorteado foi de ${valorAleatório} reais!`);
/*Crie uma classe ContaBancária que possui métodos para depósito e saque. Use try-
catch para capturar erros, como tentar sacar mais do que o saldo disponível.*/

class ContaBancaria
{
    constructor(saldoConta, saque)
    {
        this.saldoConta = saldoConta;
    }

    depositar(valorAleatório)
    {
        this.saldoConta += valorAleatório;
        return `Com o valor adicionado, seu saldo atual é de ${this.saldoConta} reais!`;
    }

    saque(valorAleatório)
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
}

var valorDepositar = new ContaBancaria(100.00);
var valorSaque = new ContaBancaria(100.00);
var valorAleatório = Math.floor(Math.random() * 1000);

console.log(valorDepositar.depositar(valorAleatório));
console.log(valorSaque.saque(valorAleatório));
console.log(`\n\n O valor sorteado foi de ${valorAleatório} reais!`);
/*
EXERCÍCIO DE JAVASCRIPT: CALCULADORA DE DESPESAS COMPARTILHADAS

Objetivo: Criar um sistema simples para calcular como dividir despesas entre amigos após uma viagem ou evento.

O sistema deve:
1. Armazenar as despesas em um array
2. Permitir adicionar despesas (valor e quem pagou)
3. Calcular quanto cada pessoa gastou
4. Calcular quanto cada pessoa deve receber ou pagar para igualar as contas

Use funções, arrays, laços de repetição e condicionais para implementar as funcionalidades.
*/

var despesas = [159.63, 189.98, 356.23];
var despesa = Math.floor(Math.random()*10);
var quantPessoas = 3;
var somaDespesas = 0;
var despesasCadaPessoa = 0;
despesasInteradasTotais = 0;

function adicionarDespesas()
{
    adicionarDespesas.push(despesa)
    return adicionarDespesas;
}

function totalDespesas()
{
    despesas.forEach(num =>
    {
        somaDespesas += num
    })

    return somaDespesas.toFixed(2);
}

function DespesaCadaPessoa()
{
    despesasCadaPessoa = somaDespesas / quantPessoas
    return despesasCadaPessoa
}

function interarDespesas()
{
    while(despesas.length < 10)
    {
        valor = (despesas[1] + 1)
        despesas.push(valor)
    }

    return despesas;
}

function despesasSoma()
{
    despesas.forEach(num =>
    {
        despesasInteradasTotais += num
    })
    
    return despesasInteradasTotais;
}


console.log('O total de despesas interadas é de ' + despesasSoma() + '\n');

console.log('Sendo assim, os números totais do vetor são ' + despesas + '\n');

console.log('As despesas totais da viagem foram de ' + totalDespesas() + ' sendo assim, as despesas por pessoa foram de ' + DespesaCadaPessoa());
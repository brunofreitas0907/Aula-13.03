/*Crie uma classe Animal com propriedades como nome, especie e idade. Adicione
um método fazerSom que retorna o som característico do animal. Considere as
possibilidades de som para: vaca, cachorro, gato, elefante e som não identificado.

------------------------------------------------------------------------------------*/

// classe para um Animal e suas propriedades
class Animal
{
    constructor(nome, especie, idade)
    {
        this.nome = nome;
        this.especie = especie;
        this.idade = idade;
    }

    // irá retornar as características e som da vaca
    fazerSomVaca()
    {
        return `O som caracteristico da ${vaca.nome}, ${vaca.especie} com ${vaca.idade}, é \n\n MUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUU\n`;
    }

    // irá retornar as características e som do cachorro
    fazerSomCachorro()
    {
        return `O som característico do ${cachorro.nome}, ${cachorro.especie} com ${cachorro.idade} anos, é: \n\n AUAUAAUAUAUAUUAUAUAUAUAU\n`;
    }
               
    // irá retornar as características e som do gato
    fazerSomGato()
    {
        return `O som característico do ${gato.nome}, ${gato.especie} com ${gato.idade} anos, é: \n\n MIAAAAAAAAAAAAAAAAAAAAAAAAAAAAU\n`;
    }

    // irá retornar as características e som do elefante
    fazerSomElefante()
    {
        return `O som característico do ${elefante.nome}, ${elefante.especie} com ${elefante.idade} anos, é: \n\n PAAAAAAAAAAAAAAAAAAAAAHH\n`;
    }
}

// variáveis com as características dos animais 
var vaca = new Animal (`vaca`, `listrada`, `15 anos`);
var cachorro = new Animal (`cachorro` , `pitbull` , `5 anos`);
var gato = new Animal (`gato`, `peludo` , `8 anos`);
var elefante = new Animal (`elefante` ,  `gigante` , `20 anos`);

// irá mostar as características e som do animal na tela para o usuário
console.log(vaca.fazerSomVaca());
console.log(cachorro.fazerSomCachorro());
console.log(gato.fazerSomGato());
console.log(elefante.fazerSomElefante());

class Carro{
    constructor(rodas, portas, volante, cor, motor)
    {
        this.rodas = rodas;
        this.portas = portas;
        this.volante = volante;
        this.cor = cor;
        this.motor = motor;
    }

    buzinar()
    {
        console.log(`AAAAAAAAAAAAAAAAAAAAA`);
    }
}

var carroBruno = new Carro (4, 4, `couro` , `preto` , `V8`);
var carroFreitas = new Carro (5, 5, `couro branco` , `branco` , `V11`);


console.log(`O carro do Bruno é ${carroBruno.cor} e o do Freitas é ${carroFreitas.cor}`);
console.log(carroBruno.buzinar());

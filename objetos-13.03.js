var frutas = {
    pera: 3, 
    maca: 5,
    banana: 10,
    melancia: 2,
    comendo: function()
    {
        console.log(`A pessoa está comendo`)
    }
}

try{
    console.log(`A quantidade total de frutas é ${frutas.comendo()}`);
} catch{
    console.error(`erro:`)
}

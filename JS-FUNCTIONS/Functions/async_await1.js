function esperarPor(tempo = 2000) {
    return new Promise(function(resolve) {
        setTimeout(function() {
            console.log("Executando promise...");
            resolve()
        }, tempo)
    })
}

//esperarPor(2000)
//.then(()=> console.log("Executando ahamm..."))
//.then(esperarPor)
//.then(esperarPor)


function retornarValor(){
    return new Promise(resolve => {
        setTimeout(()=> resolve(10, 5000))
    })
}

async function retornarValorRapido() {
    return 20
}

async function executar() {
    let valor = await retornarValorRapido()
    await esperarPor(1500)
    console.log("Async..."+valor);
    await esperarPor(2000)
    console.log("Async..."+(valor+1));
    await esperarPor(4000)
    console.log("Async..."+(valor+2));

    return valor+3
}

async function executarDeVerdade(){
    const valor = await executar()
    console.log(valor);
}
executarDeVerdade()



console.log(retornarValorRapido);

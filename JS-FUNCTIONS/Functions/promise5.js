function funcionarOuNao(valor, chanceErro) {
    
    return new Promise((resolve, reject)=> {
        try{
            con.log("Temp")
            if(Math.random() < chanceErro) {
                reject("Ocorreu um erro!!")
             } else {
                 resolve(valor)
                }
        }catch(e) {
            reject(e)
        }
    })
}

funcionarOuNao("Testando...", 0.9)
.then(v => "Valor: "+v)
.then(
    v => console.log(v),
    err => console.log("Erro Especifico: "+err)
    )
.then(()=>console.log("Quase Fim"))
.catch(err => "Erro Geral: "+err)
.then(() => console.log("Fim"))
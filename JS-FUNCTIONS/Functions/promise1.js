const primeiroElemento = arrayOuString => arrayOuString[0]

const primeiraLetra = string =>string[0]

const letraMinuscula = letra => letra.toLowerCase()

let promise = new Promise(function(Resolve){
    Resolve(
        //{
        //x: 3,y: 4
        ["Ana", "Bia"]
    //}
    )
})
.then(primeiroElemento)
.then(primeiraLetra)
.then(letraMinuscula)
//.then(v => console.log(v))
.then(console.log)

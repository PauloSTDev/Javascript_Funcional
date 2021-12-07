function bomDia() {
    console.log("Bom dia!");
}

const boaTarde = function () {
    console.log("Boa tarde!");
}

//Passar uma função como parâmetro para outra função
function exe(fn) {
    if (typeof fn === 'function'){
        fn()
    }
}
exe(5)
exe(bomDia)
exe(boaTarde)

//Retornar uma função a partir de outra função
function potencia(base){
    //return Math.pow(base, exp)
    return function(exp){
        return Math.pow(base, exp)
    }
}

///const potenciaDe2 = potencia(2)
const potenciaDe2 = potencia(2)
console.log(potenciaDe2(8));
console.log(potencia(3)(4));
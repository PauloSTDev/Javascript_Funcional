//Function Declaration
function bomDia(greating) {
    console.log(greating)
}

bomDia("Bom dia!")

//Function expression
const boaTarde = function () {
    console.log("Boa tarde!")
}
boaTarde()


const soma = function (a=9, b=1) {
    return a + b
}

console.log(soma(10, 20))
//Arrow function
const felizNatal = () => console.log("Feliz Natal!");
felizNatal()

const saudacao = (nome) => "Fala "+nome+"!!"
console.log(saudacao("Paulo"));

const agradecer = (greating) => console.log(greating);
agradecer("Valeu")

const somar = numeros => {
    let total = 0
    for(let n of numeros) {
        total += n
    }
    return total
}
numeros = [2, 3, 20, 4, 6, 32, 5]


console.log(somar(numeros));

const somarV2 = (...numeros) => {
    console.log(Array.isArray(numeros));
    let total = 0
    for(let n of numeros) {
        total += n
    }
    return total
}
console.log(somarV2(1, 2, 3, 4, 5));

//    variavel   param  param  função com os params
const potencia = base => exp => Math.pow(base, exp)
console.log(potencia(2)(10));


//This
//Array.prototype.log = function() {
//Array.prototype.primeiro = function() {
Array.prototype.primeiro = function() {
    //console.log(this)
    //console.log(this[this.length - 1])
    console.log(this[0])
}
//numeros.ultimo()
numeros.primeiro()


const subtrair = (a, b) => a - b
console.log(subtrair(4,-6))
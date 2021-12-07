//Function Expression
const increment1 = function(n) {
    return n + 1
}

//Arrow Function is always anonymous
const increment2 = (n) => {
    return n + 1
}

//Arrow sem parenteses
const increment3 = n => {
    return n + 1
}

//Tem return, porém implicito
const increment4 = n => n + 1

console.log(increment1(1))
console.log(increment2(5))
console.log(increment3(10))
console.log(increment4(17))

//Função Arrow, Tem return porém implicito. Unica linha de code
const sum = (a, b) => a + b
console.log(sum(3,8))
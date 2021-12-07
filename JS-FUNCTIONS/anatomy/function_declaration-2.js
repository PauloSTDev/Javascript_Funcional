//Anonymous function é uma função sem nome
(function (a, b, c) {
    return a + b + c
})

//Function expression e anonima)(Sem nome)
const x = 1
const sum = function (a, b) {
    return a + b
}

const result = sum (7, 59)
console.log(result)

const anotherSum = sum
console.log(anotherSum(5,9))

let z = 3
console.log(z)

z = sum
console.log(z(11, 16))

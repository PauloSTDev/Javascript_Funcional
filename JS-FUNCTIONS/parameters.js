//Parameters
function logParams(a, b, c) {

    console.log(a,b,c)
}

logParams(1, 2, 3)
logParams(1, 2, 3, 4, 5)

//Sem parameters
logParams(1, 2)
logParams(1)
let x = logParams(1, 2)
console.log(x)

//Corrigindo o Undefined
function defaultParams(a = 1,b = 2,c = 3){
    console.log(a,b,c)
}

defaultParams(7,8,9)
defaultParams(7,8)
defaultParams(7)
defaultParams()

//Spread/rest ... Listas
function logNums(...nums) {
    console.log(Array.isArray(nums))
    for(let n of nums) {
        console.log(n)
    }
    console.log(nums)
}

logNums(1,2,3,4,5,6)

function sumAll(...nums) {
    let total = 0
    for (n of nums) {
        total += n
    }
    return total
}
console.log(sumAll(1,2,3,4,5,6,7,8,9,10))
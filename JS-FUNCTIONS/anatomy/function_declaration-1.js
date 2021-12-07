//Function declaration
//Sem parametro
function sayHello() {
    console.log("Hello")
}

//Undefined
let funcHello = sayHello()
console.log(funcHello)

sayHello()

//Com parametro e sem retorno
function sayHelloTo(name) {
    console.log("Hello "+ name)
    console.log('Hello ${name}')//Dont Work
    console.log("Hello name")
}

sayHelloTo("Mike")


//Com retorno
function returnHi() {
    return "Hi!"
}

let greetingLet = returnHi()
let greetingConst = returnHi()
let greetingVar = returnHi()
console.log(greetingLet, "Let")
console.log(greetingConst, "Const")
console.log(greetingVar, "Var")
console.log(returnHi())

//Com retorno e parametro
function returnHiTo(name) {
    return "Hi "+name
}

console.log(returnHiTo("Paulo"))
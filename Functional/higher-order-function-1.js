/**
 * Functions that operate on other functions,
 * either by taking them as arguments or by
 * returning them, are called Higher-order functions.
 */

function run(fn) {
    return "Result: "+fn()
}

function sayHello() {
    console.log("Hello!")
}

run(function() {
    console.log("Runn")
})


const result = run(Math.random)
console.log(result)

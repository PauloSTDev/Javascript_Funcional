//Anonymous function
//IIFE - Immediately Invoked Function Expression
(function () {
    let x = 300
    console.log(x)
})();

(() => {
    console.log("Arrow #01")
})();

(() => console.log("Arrow #02"))();




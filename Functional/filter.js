const numbers = [1,2,3,4,5,6]

const students = [
    {name: "Paulo", score: 7.4},
    {name: "Gabi", score: 9.1},
    {name: "Pedro", score: 8.5},
    {name: "Alessandra", score: 7.9}
]

const greaterThenZed = el => el > 0
const greaterThenTen = el => el > 10
const even = el => el % 2 === 0

console.log(numbers.filter(el => el > 0))
console.log(numbers.filter(greaterThenZed))
console.log(numbers.filter(greaterThenTen))
console.log(numbers.filter(even))

const greatStudent = student => student.score >= 9

console.log(students.filter(greatStudent))



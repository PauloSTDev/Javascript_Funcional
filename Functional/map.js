
const numbers = [1,2,3,4,5,6]

//Dobrando um array
const numbersV2 = numbers.map(el => el * 2)

//Triplicando um array
const numbersv3 = numbers.map(el => el*3)

//Criando um array
const numbersV3 = []
for(let n of numbers) {
    numbersV3.push(n*2)
}

console.log(numbers, numbersV2, numbersV3)

const students = [
    {name: "Paulo", score: 7.4},
    {name: "Gabi", score: 9.1},
    {name: "Pedro", score: 8.5},
    {name: "Alessandra", score: 7.9}
]

const getScore = el => el.score

const result = students.map(getScore).map(Math.ceil)

console.log(students, result)

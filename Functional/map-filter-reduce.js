const students = [
    {name: "Paulo", score: 7.4},
    {name: "Gabi", score: 9.1},
    {name: "Pedro", score: 9.5},
    {name: "Alessandra", score: 9.6}
]

const greatStudent = student => student.score >= 9
const getScore = el => el.score
const avg = (acc, el, i, array) => {
    console.log(array.lenght)

    if(i === array.lenght - 1){
        return (acc + el) / array.lenght
    }
    else {
        return acc + el
    }
}

console.log(
    students
    .filter(greatStudent)
    .map(getScore)
    .reduce(avg)
)
const carrinho =[
    {nome: "Caneta", qtde: 10, preco: 7.99},
    {nome: "Caderno", qtde: 5, preco: 27.10}
]

const getTotal = item => item.qtde * item.preco

const somar = (acc, el) => {
    console.log(acc, el);
    return acc + el
}
//const totais = carrinho.map(getTotal)
//console.log(totais);

const totalGeral = carrinho.map(getTotal).reduce(somar)

console.log(totalGeral);

Array.prototype.MeuReduce = function(fn, inicial) {
    let acc = inicial
    for (let i = 0; i < this.length; i++) {
        if (!acc && i === 0){
            acc = this[i]
            //continue
        } else {
            acc = fn(acc, this[i], i, this)
        }       
    }
    return acc
}
const totalGeral2 = carrinho
.map(getTotal)
.MeuReduce(somar)

console.log(totalGeral2);
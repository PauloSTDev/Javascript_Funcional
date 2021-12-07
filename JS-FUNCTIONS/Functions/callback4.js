const carrinho = [
    {nome: "Caneta", qtde: 10, preco: 7.99},
    {nome: "Impressora", qtde: 0, preco: 649.50},
]


const getNome = item => item.nome
const qtdeMaiorIgualZero = item => item.qtde > 0
const qtdeMuitoGrande = item => item.qtde > 1000

//Filter
const nomesItensValidos = carrinho
.filter(qtdeMaiorIgualZero)
.map(getNome)

console.log(nomesItensValidos);

//Implementação de um filter próprio
Array.prototype.meuFilter = function(fn) {
    const novoArray = []

    for(let i =0; i < this.length; i++){
        if (fn(this[i], i, this)) {
            novoArray.push(this[i])
        }
        return novoArray
    }
}
const nomesItensValidos2 = carrinho
.meuFilter(qtdeMaiorIgualZero)
.map(getNome)

console.log(nomesItensValidos2);

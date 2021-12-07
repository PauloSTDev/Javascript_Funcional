const nums = [1,2,3,4,5]
const dobro = (n, i, a) => n * 2 + i + a.length 
console.log(nums.map(dobro));

const nomes = ["Ana", 'Bia', "Gui", "Lia", "Rafa"]
const primeiraLetra = texto => texto[0]
const letras = nomes.map(primeiraLetra)
console.log(nomes, letras);

const carrinho = [
    {nome: "Caneta", qtde: 10, preco: 7.99},
    {nome: "Impressora", qtde: 0, preco: 649.50},
]

const getNome = item => item.nome
console.log(carrinho.map(getNome));

const getTotal = item => item.preco * item.qtde
const totais = carrinho.map(getTotal)
console.log(totais);

//Criação de um map
Array.prototype.meuMap= function(fn) {

    const novoArray = []
    for ( let i =0; i < this.length; i++){
        const resultado = fn(this[i], i, this)
        novoArray.push(resultado)
    }
    return novoArray
}

console.log(carrinho.meuMap(getNome));
console.log(carrinho.meuMap(getTotal));
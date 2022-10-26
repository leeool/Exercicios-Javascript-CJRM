/*
  01

  - Implemente um código assíncrono entre os console.log() abaixo.
*/

// console.log('Linha 1')
// console.log('Linha 2')
// console.log('Linha 3')
// console.log('Linha 4')

setTimeout(() => {
  // console.log("oi")
}, 2000)

// console.log('Linha 5')
// console.log('Linha 6')
// console.log('Linha 7')
// console.log('Linha 8')

/*
  02

  - Descomente o código abaixo e crie a função que fará a string dentro da 
    "logGreeting" ser exibida no console.
*/

function logGreeting(name) {
  // console.log(`olá, ${name}`)
}

const x = (term) => {
  term("joao")
}

x(logGreeting)

/*
  03

  - O código abaixo possui uma parte que pode ser isolada. Isole-a.
*/

const getLessThanFive = num => num < 5
const lesserThanFive = (numbers) => numbers.filter(getLessThanFive)

const number = [3, 4, 10, 20]

// console.log(lesserThanFive(number))

/*
  04

  - Refatore o código abaixo.
*/

const prices = [12, 19, 7, 209]
const callBackTotalPrice = (acc, price) => acc + price

const totalPrice = prices.reduce(callBackTotalPrice, 0)

// console.log(`Preço total: ${totalPrice}`)

/*
  05

  - Abaixo da declaração do objeto "car", modifique a cor do carro para 'azul';
  - Não insira `car.color = azul`.
*/

let car = { color: 'amarelo' }
let secondCar = car

secondCar.color = "azul"

// console.log(car, secondCar)


/*
  06

  - Crie uma função que recebe 3 argumentos;
  - Se um dos 3 argumentos não for passado na invocação, a string 'A função 
    deve ser invocada com 3 argumentos' deve ser retornada;
  - Se todos os argumentos forem passados, retorne a string 'A função foi 
    invocada com 3 argumentos'.
*/

const args = []

const myFunc = (param1, param2, param3) => {
  const isUndefined = [param1, param2, param3].includes(undefined)

  return isUndefined
    ? "A função deve ser invocada com 3 argumentos"
    : "A função foi invocada com 3 argumentos"

}

// console.log(myFunc(1, 2, 3))

/*
  07

  - O objeto abaixo representa uma caixa de livros com espaço para 5 livros e 
    que, no momento em que foi declarado, possui nenhum livro dentro;
  - Crie um método que irá adicionar livros na caixa;
  
  Este método deve:
    - Receber por parâmetro o número de livros que serão colocados na caixa. 
      Esse número não precisa encher a caixa de uma só vez, os livros podem 
      ser acrescentados aos poucos;
    - Retornar a frase: "Já há 'X' livros na caixa";
    - Se a caixa já estiver cheia, com todos os espaços já preenchidos, o 
      método deve retornar a frase: "A caixa já está cheia";
    - Se ainda houverem espaços na caixa mas a quantidade de livros passada por
      parâmetro for ultrapassar o limite de espaços da caixa, mostre quantos 
      espaços ainda podem ser ocupados, com a frase: "Só cabem mais 
      QUANTIDADE_DE_LIVROS_QUE_CABEM livros";
    - Se couber somente mais um livro, mostre a palavra "livro" (no singular) 
      na frase acima.
*/

let booksBox = {
  spaces: 5,
  booksIn: 0
}

const getSingularOrPlural = (quantity, singular, plural) =>
  quantity === 1 ? singular : plural

booksBox.addBooks = (bookAmount) => {
  booksBox.booksIn += bookAmount

  const haveAvailabeSpace = booksBox.booksIn > 5 && booksBox.spaces >= 0 || booksBox.spaces < 0

  if (haveAvailabeSpace) {
    const pluralOrSingularWord = getSingularOrPlural(booksBox.spaces, "livro", "livros")
    const fitPluralOrSingularWord = getSingularOrPlural(booksBox.spaces, "cabe", "cabem")

    return console.log(`Só ${fitPluralOrSingularWord} mais ${booksBox.spaces} ${pluralOrSingularWord}`)
  }

  booksBox.spaces -= bookAmount

  booksBox.spaces === 0
    ? console.log("a caixa já esta cheia")
    : console.log(`Já há ${booksBox.booksIn} livros na caixa`)

}

booksBox.addBooks(1)
booksBox.addBooks(7)
// booksBox.addBooks(1)
// booksBox.addBooks(2)

console.log(booksBox)
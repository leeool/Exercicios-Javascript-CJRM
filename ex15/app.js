/*
  01

  - Obtenha a ul do index.html e adicione em todos os elementos filhos dela,  
    uma classe 'video';
  - Exiba no console os elementos filhos da ul com a classe já inserida.
*/

const ul = document.querySelector("ul")
console.log(ul.children)

Array.from(ul.children).forEach(filhos => {
  filhos.classList.add("video")
})

/*
  02

  - Usando a propriedade adequada, descubra quem é o elemento pai do h2
    e exiba-o no console;
*/

const secondTitle = document.querySelector("h2")
console.log(secondTitle.parentElement)

/*
  03

  - Descubra quem é o próximo elemento irmão do h1 e exiba-o no console;
*/

const mainTitle = document.querySelector("h1")
console.log(mainTitle.nextElementSibling)

/*
  04

  - Descubra quem é o irmão anterior da ul e exiba-o no console;
*/

console.log(ul.previousElementSibling)

/*
  05

  - Quando um clique acontecer em alguma das lis, faça com que a li clicada seja  
    exibida no console.
*/

Array.from(ul.children).forEach( element => {
  element.addEventListener("click", event => {
    const clickedElement = event.target

    console.log(clickedElement)
  })
})

/*
  06

  - Quando o botão for clicado, adicione o nome dos vídeos abaixo dentro da ul;
  - Cada nome deve estar dentro de uma li.
*/

const videos = [{
  name: 'Como o promise all funciona | JavaScript',
  length: '00:01:52'
}, {
  name: 'Como refatorar um for loop | JavaScript',
  length: '00:04:18'
}, {
  name: 'Como fazer requisições HTTP com o método fetch | JavaScript',
  length: '00:02:55'
}]

const button = document.querySelector("button")

videos.forEach( element => {
  button.addEventListener("click", () => {
    ul.innerHTML += `<li>${element.name}</li>`
  })
})

/*
  07

  - Se um clique no h1 acontecer, faça com que todos os elementos dentro do body 
    sejam removidos.
*/


const body = document.body


mainTitle.addEventListener("click", () => {
  Array.from(body.children).forEach(filhos => {
    filhos.remove()
  })
})

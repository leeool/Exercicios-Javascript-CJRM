/*
  Apenas 3 exercícios, mas que exigem um certo nível de conhecimento do que  
  vimos até aqui =)
*/

const form = document.querySelector("form")
const input = document.querySelector("input")
const button = document.querySelector("button")

const regexPattern = /[a-zA-Z]{6,}/

/*
  01

  - Valide o valor do input "username" à medida em que ele é digitado;
  - Ele deve conter: 
    - No mínimo 6 caracteres;
    - Apenas letras maiúsculas e/ou minúsculas;
  - Se o valor inserido não é válido, exiba um parágrafo laranja abaixo do  
    input com a seguinte mensagem: "O valor deve conter no mínimo 6 caracteres,  
    com apenas letras maiúsculas e/ou minúsculas";
  - Se o valor é válido, o parágrafo deve ser verde e exibir a mensagem  
    "Username válido =)";
  - Use as classes disponíveis no arquivo style.css para colorir o parágrafo;
  - Não insira o parágrafo manualmente no index.html.
  
  Dica: pesquise pelo método "insertAdjacentElement", no MDN;
*/


const cleanInput = () => {
  form.username.value = ""
  form.username.focus()
}

let feedbackText = document.createElement("p")

form.addEventListener("input", event => {
  const username = event.target.value
  const isUsernameValid = regexPattern.test(username)
  event.target.insertAdjacentElement("afterend", feedbackText)

  const invalidInputInfo = {
    text: "O valor deve conter no mínimo 6 caracteres, com apenas letras maiúsculas e/ou minúsculas",
    classText: "username-help-feedback" 
  }

  const validInputInfo = {
    text: "Username válido =)",
    classText: "username-success-feedback" 
  }

  if(!isUsernameValid){
    insertUsernameInfoIntoDOM(invalidInputInfo)
    return
  }

  insertUsernameInfoIntoDOM(validInputInfo)
})

const insertUsernameInfoIntoDOM = ({text, classText}) => {
  feedbackText.textContent = text
  feedbackText.setAttribute("class", classText)
  
  form.username.setAttribute("class", classText)
}

const insertSubmitInfoIntoDOM = ({text, classText}) => {
  feedbackSubmit.textContent = text
  feedbackSubmit.setAttribute("class", classText)
  
  form.username.setAttribute("class", classText)
}

/*
  02

  - Valide o envio do form;
  - Se o username inserido no input é válido, no envio do form, exiba um  
    parágrafo verde abaixo do botão com a mensagem "Dados enviados =)";
  - Se no momento do envio, o valor do input é inválido, o parágrafo deve ser  
    vermelho e exibir "Por favor, insira um username válido".
  - Use as classes disponíveis no arquivo style.css para colorir o parágrafo;
  - Não insira o parágrafo manualmente no index.html.
*/

let feedbackSubmit = document.createElement("p")

form.addEventListener("submit", event => {
  event.preventDefault()
  const usernameValue = form.username.value
  const isUsernameValid = regexPattern.test(usernameValue)
  button.insertAdjacentElement("afterend", feedbackSubmit)

  const invalidSubmitInfo = {
    text: "Por favor, insira um username válido",
    classText: "submit-help-feedback"
  }
  
  const validSubmitInfo = {
    text: "Dados enviados =)",
    classText: "submit-success-feedback"
  }

  if(!isUsernameValid){
    insertSubmitInfoIntoDOM(invalidSubmitInfo)
    return
  }

  insertSubmitInfoIntoDOM(validSubmitInfo)
  cleanInput()
})

/*
  03

  - Há algumas aulas, falamos sobre o método some;
  - Neste exercício, seu desafio será criar este método do zero;
  - Implemente uma função "some" que possui a mesma funcionalidade do método  
    some original;
  - A assinatura da invocação desta função deverá ser:
    - some([1, 2, 3], item => item > 2) - Retorna true;
    - some([1, 3, 5], item => item === 0) - Retorna false;
  - Se você não se lembra como o método some funciona, há 2 opções:
    1) Reassistir às seguintes aulas:
      - "Desenvolvendo um popup" - Aula 04-04 da etapa 5;
      - "Correção dos exercícios da aula 04 da etapa 05" - Aula 01-01 da etapa  
        6;
    2) Pesquisar no MDN.
  
  Spoiler alert: este tipo de exercício será frequente em etapas mais avançadas  
  do curso, onde falaremos sobre TDD. Vá se aquecendo =D
*/

const teste = [1, 2, 3]
const condicao = teste === 2
 const result = teste 


const someTwo = (array, func) => {
  
  for(let i = 0; i < array.length; i++){
    console.log(array[i])
    if(func(array[i])){
      return true
    }
  }
  return false
}

console.log(someTwo([1, 2, 3], item => item === 10))

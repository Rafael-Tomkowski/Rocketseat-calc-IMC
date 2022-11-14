//Variáveis

const form = document.querySelector("form")
const btnClose = document.querySelector("#close")

const peso = document.querySelector("#weight")
const altura = document.querySelector("#heigh")

const modalWrapper = document.querySelector(".modal-wrapper")
const alertError = document.querySelector(".alert-error")


//Eventos


//Função Callback
 form.onsubmit = event => {
    event.preventDefault()

    resultIMC = IMC(peso, altura)

    document.querySelector(".result").innerText = `${resultIMC}`

    //Now show Result Screen

    modalWrapper.classList.add("open")
}

//Funções
btnClose.onclick = () => modalWrapper.classList.remove("open")


function IMC(peso, altura) {
    return (peso.value / ((altura.value / 100) ** 2)).toFixed(2)
}

// function errorIMC(){
//     alertError.classList.add("open")
// }
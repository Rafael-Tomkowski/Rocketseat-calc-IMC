
//Variables
const form = document.querySelector("form")

const weight = document.querySelector("#weight")
const heigh = document.querySelector("#heigh")

const alertError = document.querySelector(".alert-error")


// Modal
const Modal = {
    
    wrapper: document.querySelector(".modal-wrapper"),
    buttonClose: document.querySelector("#close"),
    message: document.querySelector(".result"),

    open() {
        Modal.wrapper.classList.add("open")
    },
    close(){
        Modal.wrapper.classList.remove("open")
    }
}

//Callback function
 form.onsubmit = event => {
    event.preventDefault()

    resultIMC = IMC(weight, heigh)
    Modal.message.innerText = `${resultIMC}`

    //Now show Result Screen
    Modal.open()
}

//functions
Modal.buttonClose.onclick = () => {
    Modal.close()
}

function IMC(weight, heigh) {
    return (weight.value / ((heigh.value / 100) ** 2)).toFixed(2)
}

// function errorIMC(){
//     alertError.classList.add("open")
// }
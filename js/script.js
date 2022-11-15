// Modal
import {
    Modal
} from "./modal.js"

//Variables
const form = document.querySelector("form")
const weight = document.querySelector("#weight")
const heigh = document.querySelector("#heigh")

// const alertError = document.querySelector(".alert-error")

//Callback function
form.onsubmit = event => {
    event.preventDefault()

    let resultIMC = IMC(weight, heigh)
    Modal.message.innerText = `${resultIMC}`

    //Now show Result Screen
    Modal.open()
}

//functions
function IMC(weight, heigh) {
    return (weight.value / ((heigh.value / 100) ** 2)).toFixed(2)
}

// function errorIMC(){
//     alertError.classList.add("open")
// }
import {
    Modal
} from "./modal.js"

import {
    AlertError
} from "./alert-error.js"

import {
    calculateIMC,
    errorIMC
} from "./utils.js"

const form = document.querySelector("form")
const inputWeight = document.querySelector("#weight")
const inputHeigh = document.querySelector("#heigh")

form.onsubmit = event => {
    event.preventDefault()

    const weight = inputWeight.value
    const heigh = inputHeigh.value


    const verifyIfInputHasNaN = errorIMC(weight) || errorIMC(heigh)

    if (verifyIfInputHasNaN) {
        AlertError.open()
        return;
    } 


        const resultIMC = calculateIMC(weight, heigh)
        
        displayResultMessage(resultIMC)
    
}

function displayResultMessage(resultIMC) {
    Modal.message.innerText = `${resultIMC}`
    Modal.open()
}

inputWeight.oninput = () => AlertError.close()
inputHeigh.oninput = () => AlertError.close()
    

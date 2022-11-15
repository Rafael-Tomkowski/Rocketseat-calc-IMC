// Modal
import {
    Modal
} from "./modal.js"

// Alert Error
import {
    AlertError
} from "./alert-error.js"

import {
    IMC, errorIMC
} from "./utils.js"

// Variables
const form = document.querySelector("form")
const inputWeight = document.querySelector("#weight")
const inputHeigh = document.querySelector("#heigh")
const messageImc = document.querySelector(".result")

// Callback function
form.onsubmit = event => {
    event.preventDefault()

    const weight = inputWeight.value
    const heigh = inputHeigh.value


    const verifyError = errorIMC(weight) || errorIMC(heigh)

    // Show error message
    if (verifyError) {
        AlertError.open()
        return;
    }

    AlertError.close()

    const resultIMC = IMC(weight, heigh)


    messageImc.innerText = `${resultIMC}`

    // Now show Result Screen
    Modal.open()
}

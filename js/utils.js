export function IMC(weight, heigh) {
    return (weight / ((heigh / 100) ** 2)).toFixed(2)
}

export function errorIMC(value) {
    return isNaN(value) || value == ""
}


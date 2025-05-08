const prompt = require("prompt-sync") ()
const numero = Number(prompt("Número (centena):"))// le o número
if (numero < 100 || numero >= 1000) {
    console.log("Erro..deve ser uma centena")
    return
} 
const num1 = Math.floor (numero / 100) // obtem 1* n
const sobra = numero % 100 // o que sobra (dezena)
const num2 = Math.floor ( sobra / 10) // obtem 2  n
const num3 = sobra % 10 // obtém 3* n
console.log(`Invertido  ${num3}${num2}${num1}`)
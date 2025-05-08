const prompt = require("prompt-sync")()    // adiciona o pacote ao programa

const salario = Number(prompt("Digite seu salário R$: "))
const tempo = Number(prompt("Tempo de empresa (anos): "))

const quadrienios = Math.floor(tempo / 4)
const acrescimento = salario * quadrienios / 100

console.log(`Quadrienios: ${quadrienios}`)
console.log(`Salário Final R$: ${(salario + acrescimento).toFixed(2)}`)
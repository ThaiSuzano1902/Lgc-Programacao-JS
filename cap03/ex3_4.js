const prompt = require("prompt-sync") ()

const racao = Number(prompt("Peso da raçã(kg): "))
const consumo = Number(prompt("Consumo diário(gr): "))

const pesoGr = racao * 1000

const duracao = Math.floor(pesoGr / consumo) // dividindo o consumo pela qntd de kg
const sobra = pesoGr % consumo // sobra da divisão

console.log(`Duração: ${duracao} dias`)
console.log(`Sobra ${sobra} gr`)
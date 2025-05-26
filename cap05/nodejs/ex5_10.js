const prompt = require("prompt-sync")()
const valor = Number(prompt("Valor R$:  "))
const parcelas = Number(prompt("N* De Parcelas:  "))
const valorParcelas = Math.floor(valor / parcelas) 
const valorFinal = valorParcelas + ( valor % parcelas)
for (let i = 1; i < parcelas; i++ ) {
    console.log(`${i} parcela: ${valorParcelas.toFixed(2)}`)
}
console.log(`${parcelas} parcela: R$ ${valorFinal.toFixed(2)}`) //última parcela
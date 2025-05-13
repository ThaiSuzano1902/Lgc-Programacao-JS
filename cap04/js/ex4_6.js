const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")
const resp3 = document.querySelector("#outResp3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const saque = Number(frm.inValor.value)

    if (saque % 10 !=0) {
        alert("Valor inválido para notas disponiveis (R$ 10, R$ 50, R$ 100)")
        frm.inValor.focus()
        return
    }
    const notaCem = Math.floor(saque/100) // calcula notas de 100
    let resto = saque % 100 //se der um valor quebrado, é armazenado e declarado depois
    const notaCinquenta = Math.floor(resto / 50)
    resto = resto % 50
    const notaDez = Math.floor(resto / 10)
    if (notaCem > 0) {
        resp1.innerText = (`Notas de R$ 100: ${notaCem}`)
    }
    if (notaCinquenta > 0) {
        resp2.innerText = (`Notas de R$ 50: ${notaCinquenta}`)
    } 
    if (notaDez > 0) {
        resp3.innerText = (`Notas de R$10: ${notaDez}`)
    }
})

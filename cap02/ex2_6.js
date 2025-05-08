const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault();
    const valorPorTempo =  Number(frm.inValor.value)
    const tempoCliente =  Number(frm.inTempo.value)

    const valorTotal = Math.ceil(tempoCliente / 15) * valorPorTempo

    resp.innerText = (`Valor a pagar R$: ${valorTotal.toFixed(2)}`)
})
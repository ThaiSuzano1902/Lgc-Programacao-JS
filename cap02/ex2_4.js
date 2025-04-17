const frm = document.querySelector("form")
const resp1 = document.querySelector("#mensagemTotal")

frm.addEventListener("submit", (e) => {
    e.preventDefault();
    const quilo = Number(frm.inQuilo.value)
    const consumo = Number(frm.inConsumo.value)
    const valorTotal = (quilo / 1000) * consumo
     resp1.innerText = (`Valor a pagar: R$ ${valorTotal.toFixed(2)}`)
})
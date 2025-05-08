const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector('#outResp2')

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const remedio = frm.inNome.value // obtém resposta do campo.
    const valor = Number(frm.inValor.value)

    const promocao = Math.floor(valor * 2) //arredonda para baixo resultado

    resp1.innerText = (`Promoção de ${remedio}`)
    resp2.innerText = (`Leve 2 por apenas R$: ${promocao.toFixed(2)}`)
})
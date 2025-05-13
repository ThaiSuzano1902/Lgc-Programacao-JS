const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const valor = Number(frm.inValor.value)
  // caso valor insuficiente
  if (valor < 1.00) {
    alert("Valor Insuficiente (no mínimo, R$ 1.00)")
    frm.inValor.focus()
    return
  }

  // declara variáveis
  let tempo
  let troco
//verifica tempo e troco
  if (valor >= 3.00) {
    tempo = 120
    troco = valor - 3.00
  } else if (valor >= 1.75) {
    tempo = 60
    troco = valor - 1.75
  } else {
    tempo = 30
    troco = valor -1.00
  }
     // exibe as respostas
     resp1.innerText = `Tempo: ${tempo} min`
  if (troco > 0) {
    resp2.innerText = `Troco R$: ${troco.toFixed(2)}`
  }
})
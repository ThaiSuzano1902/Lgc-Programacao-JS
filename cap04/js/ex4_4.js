const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const horaBrasil = Number(frm.inHoraBR.value) // pega o valor
    let horaFranca = horaBrasil + 5 // calcular horario na franca
    if (horaFranca > 24) { // se ássar das 24h ma frença
        horaFranca = horaFranca - 24 // subtrair por 24
    }
    resp.innerText = (`Hora na frança: ${horaFranca.toFixed(2)}`)
})
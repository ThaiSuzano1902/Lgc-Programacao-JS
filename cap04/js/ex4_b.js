const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const velocidadePermitida = Number(frm.inVelocidade.value)
    const motorista = Number(frm.inCondutor.value)

   // if ((motorista * 1.20 ) > velocidadePermitida) {
//     if (motorista <= velocidadePermitida * 1.20) {
//         resp.innerText = ("Multa leve")
//     } else if (motorista >= velocidadePermitida * 1.20){
//         resp.innerText = ("Multa grave")
//     } else {
//         resp.innerText = ("Sem Multa")
//     }
// })

    if (motorista <= velocidadePermitida) {
        resp.innerText = ("Sem Multa");
    } else if (motorista <= velocidadePermitida * 1.20) {
        resp.innerText = ("Multa leve");
    } else {
        resp.innerText = ("Multa grave");
    }
})
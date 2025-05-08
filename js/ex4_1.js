const frm = document.querySelector("form")
const resp1 = document.querySelector("h3")
const resp2 = document.querySelector("h4")

frm.addEventListener("submit", (e) => {
    e.preventDefault();
    const nome = frm.inNome.value
    const nota1 = Number(frm.inNota1.value)
    const nota2 = Number(frm.inNota2.value)

    const media = (nota1 + nota2) / 2 //media das notas
    resp1.innerText = (`Média de Notas: ${media.toFixed(2)}`)
    //criando condições
    if (media >= 7){
        resp2.innerText = (`Parabéns ${nome} Voce foi aprovado!!`)
        resp2.style.color = "blue"
    } else {
        resp2.innerText = (`Que pena ${nome}, Voce foi reporvado`)
        resp2.style.color = "red"
    }
})
//cria referencia ao form e o elemento onde sera exibido a resposta
const frm = document.querySelector("form")
const resp1 = document.querySelector("h3")

frm.addEventListener("submit", (e) =>{
    e.preventDefault()
    const nome = frm.inNome.value
    const masculino = frm.inMasculino.checked
    const altura = Number(frm.inAltura.value)

    let peso //declara variavel peso
    if( masculino == true) {
        peso = 22 * Math.pow(altura, 2)
    } else {
        peso = 21 * Math.pow(altura, 2)
    }
    resp1.innerText = (`${nome}, O seu peso ideal é: ${peso.toFixed(3)} kg`)

    frm.addEventListener("reset", () => {
        resp1.innerText = "" //limpa o conteudo do campo h3.
    })
})
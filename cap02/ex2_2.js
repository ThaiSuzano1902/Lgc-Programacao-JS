const frm = document.querySelector("form")
const resp1 = document.querySelector("h3")
const resp2 = document.querySelector("h4")

//Cria um "Ouvinte" de evento, acionado quando o botão submit for clicado
frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const titulo = frm.inTitulo.value
    const duracao = Number(frm.inMinutos.value)

const horas = Math.floor(duracao / 60)
const minutos = duracao % 60 //obtém o resto da divisão

resp1.innerText = titulo
resp2.innerText = `${horas} hora(s) e ${minutos} minuto(s)`
})



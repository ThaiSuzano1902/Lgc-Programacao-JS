const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const num = Number(frm.inNumero.value)

    let estrelas = ""
    for (let i = 1; i <= num; i++) {
        if (i % 2 == 1) {
            estrelas = estrelas + "*" // se i resto da divisão por 2 é 1, impar
        } else {
            estrelas = estrelas + "-" // se o resto é 0, par
        }
        resp.innerText = estrelas
    }
})
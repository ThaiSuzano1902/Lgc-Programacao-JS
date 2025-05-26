const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")

frm.addEventListener("submit", (e) => {
  e.preventDefault()
  const num = Number(frm.inNumero.value)
  let divisores = ""
  let soma = 0

  for (let i = 1; i <= num / 2; i++) {
    if (num % i == 0) {
      divisores += i + " "
      soma += i
    }
  }

  resp1.innerText = `Divisores de ${num}: ${divisores}`
  if (soma == num) {
    resp2.innerText = `${num} é um Número Perfeito`
  } else {
    resp2.innerText = `${num} NÃO é um Número Perfeito`
  }
})

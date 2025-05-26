const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
  e.preventDefault()

  const nome = frm.inFruta.value
  const num = Number(frm.inNumero.value)
  let repeteFruta = ""

  for (let i = 1; i <= num; i++) {
  repeteFruta += nome;
  if (i < num) {
    repeteFruta += "*";
  }
}
  resp.innerText = repeteFruta
})

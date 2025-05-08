const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1") 
const resp2 = document.querySelector("#outResp2")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const ladoUm = Number(frm.inLado1.value)
    const ladoDois = Number(frm.inLado2.value)
    const ladoTres = Number(frm.inLado3.value)

   // let verificaTriangulo
    if (ladoUm == ladoDois || ladoUm == ladoTres ) {
        resp1.innerText =("Lados podem formar um triangulo")
    } else {
        resp1.innerText =("Lados podem formar um triangulo")
    }

    if (ladoUm == ladoDois && ladoDois == ladoTres ) {
        resp2.innerText = (`Tipo: Equilatero`)
    } else if (ladoUm == ladoDois || ladoUm == ladoTres){
        resp2.innerText = (`Tipo: Isóceles`)
    } else {
         resp2.innerText = (`Tipo: Escaleno`)
    }

})
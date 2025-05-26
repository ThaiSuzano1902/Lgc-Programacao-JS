const frm = document.querySelector("form");
const resp = document.querySelector("pre");

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const chinchila = Number(frm.inQuantidade.value);
    const anos = Number(frm.inAno.value);

    let resposta = "";
    let quantidadeFinal = chinchila;

    for (let i = 1; i <= anos; i++) { // Alteração aqui: i <= anos
        resposta = resposta + i + "º Ano: " + quantidadeFinal + " Chinchilas\n";
        quantidadeFinal = quantidadeFinal * 3;
    }
    resp.innerText = resposta;
});
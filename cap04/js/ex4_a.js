const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
    e.preventDefault();
    const numero = frm.inNumero.value;
    
//condição ? valor_se_verdadeiro : valor_se_falso

    resp.innerText = (numero % 2 === 0) ? `${numero} é par` : `${numero} é impar`;
});

//   if (numero % 2 == 0 ) {

//             resp.innerText = (`${numero} é par`)
    
//         } else {
    
//             resp.innerText = (`${numero} é impar`)}

abrir.onclick = () => {
    // console.log("Clicou");
    fundo.style.backgroundColor = "rgba(0,0,0,0.5)";
    tela.style.top = "0px";
    console.log("tela");
};

// fundo.onclick = () => {
//     fundo.style.backgroundColor = "rgba(0,0,0,0)";
//     tela.style.top = "-600px";
// };



fechar.onclick = () => {
    console.log("Fechar");
    fundo.style.backgroundColor = "rgba(0,0,0,0)";
    tela.style.top = "-600px";
};
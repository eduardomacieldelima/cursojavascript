function corFundo(){
    var cor = document.getElementById("txtCor").value;
    cor = cor.toLowerCase();                                // Toda entrada alterna para caracteres em letra minuscula
    if (cor == "red"){
        document.body.style.backgroundColor = "#FF0000";}  //== Comparação
    else if (cor == "black"){
        document.body.style.backgroundColor = "#000000";}  //else if  = Se não se
    else if (cor == "green"){
        document.body.style.backgroundColor = "#00FF00";}
    else {
        document.body.style.backgroundColor = "#FFFFFF"; // else  = Qualquer coisa que for digitada que não for as descritas
        alert("A cor não existe na paleta");}
}


function textoClaro(){
    document.getElementsByTagName("h1")[0].style.color = "blue";
    document.getElementsByTagName("label")[0].style.color = "blue";
}

function textoEscuro(){
    document.getElementsByTagName("h1")[0].style.color = "darkRed";
    document.getElementsByTagName("label")[0].style.color = "darkRed";
}
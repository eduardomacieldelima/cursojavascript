function corFundo(){
    var cor = document.getElementById("txtCor").value;
    cor = cor.toLowerCase();  // Toda entrada alterna para caracteres em letra minuscula

    var vcor = "";


    if (cor == "red"){
        vcor ="#f00";
    }
        //document.body.style.backgroundColor = "#FF0000";}  //== Comparação
    else if (cor == "black"){
        vcor ="#000";
    }
        //document.body.style.backgroundColor = "#000000";}  //else if  = Se não se
    else if (cor == "green"){
        vcor ="#0f0";
    }
        //document.body.style.backgroundColor = "#00FF00";}

    else {
        //document.body.style.backgroundColor = "#FFFFFF"; // else  = Qualquer coisa que for digitada que não for as descritas
        vcor ="#fff";
        alert("A cor não existe na paleta");
    }

        document.body.style.backgroundColor = vcor;
}


function textoClaro(){
    document.getElementsByTagName("h1")[0].style.color = "blue";
    document.getElementsByTagName("label")[0].style.color = "blue";
}

function textoEscuro(){
    document.getElementsByTagName("h1")[0].style.color = "darkRed";
    document.getElementsByTagName("label")[0].style.color = "darkRed";
}
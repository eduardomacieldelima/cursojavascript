//Função que não retorna
function soma(array_numeros){
    var rs = 0;
    for (var i = 0; i < array_numeros.length; i++){
        rs += array_numeros[i];  //com sinal + acumula e = troca o valor
    }
    console.log(rs);
}

function maior(array_numeros){ 10-30-2-13-45

    var m = array_numeros[0];
    for (var i = 1; i < array_numeros.length ; i++) {
        if (array_numeros[i] > m) {
            m = array_numeros[i];
        }
    }
    console.log(m);
}

function menor(array_numeros){ 10-30-2-13-45

    var m = array_numeros[0];
    for (var i = 1; i < array_numeros.length ; i++) {
        if (array_numeros[i] < m) {
            m = array_numeros[i];
        }
    }
    console.log(m);
}


//Funções com retorno

function mensagem(nome){
    return `Olá sr. ${nome}`;
}

//Funções Anonimas
const msg = function(nome){
// let msg = function(nome){
    return `Olá sr(a). ${nome}`;
};

// msg = "raposao"

const anobissexto = function(ano){
// let anobissexto = function(ano){
    if (ano % 4 == 0) {
        return "Ano Bissexto";
    }
    else {
        return "Ano Não Bissexto";
    }
};

const paletaCores = function(linha,coluna){

    var tabela = "<table>";

    for(var lin = 0; lin < linha; lin++){
        tabela += "<tr>";
        for (var col = 0; col < coluna; col++){
            var red = Math.round(1+Math.random()*254);
            var green = Math.round(1+Math.random()*254);
            var blue = Math.round(1+Math.random()*254);
            tabela += `<td onclick = mudar('rgb(${red},${green},${blue})') style='background-color:rgb(${red},${green},${blue})'>__</td>`;
        }
        tabela += "</tr>";
    }

    return tabela;


    // var red = Math.round(1+Math.random()*254);
    // var green = Math.round(1+Math.random()*254);
    // var blue = Math.round(1+Math.random()*254);
    // return `rgb(${red},${green},${blue})`;
};

function mudar(cor){
    window.document.body.style.backgroundColor = cor;
}




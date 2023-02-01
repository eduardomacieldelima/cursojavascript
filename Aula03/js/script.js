function troca(){
    var imagem = document.getElementById("foto").src;

    console.log(imagem);
    // //vamos pegar a quantidade de caracteres da variável imagem 
    // //com o comando length;
    console.log(imagem.length);
    // //vamos utilizar o comando substring para obter um trecho de texto
    // //do caminho do nome do arquivo
    console.log(imagem.substring(imagem.documentlength -13,imagem.length));
    
    var rsimg = imagem.substring(imagem.length -13,imagem.length); 

    console.log(rsimg);

    rsimg = rsimg == "img/foto1.jpg" ? "img/foto2.jpg" : "img/foto1.jpg";  //imagem é foto 1? se é a foto 2 troca para foto 1
    
    document.getElementById("foto").src = rsimg;

    
}




function infoData() {

//vamos fazer uma instancia da classe date(), esta classe possui muitas funções, tais como: getHours, getData, getMouth
const tempo = new Date();
var datacompleta = tempo.toLocaleDateString();
var diames = tempo.getDate();
var diasemana = tempo.getDay();
var mes = tempo.getMonth();
var hora = tempo.getHours();
var minutos = tempo.getMinutes();
var segundos = tempo.getSeconds();


var dias = "";



//desvio de fluxo multiplo com switch case

switch(diasemana){


    case 0:
        dias = "Domingo";
        break;
    case 1:
        dias = "Segunda-feira";
        break;
    case 2:
        dias = "Terça-feira";
        break;
    case 3:
        dias = "Quarta-feira";
        break;
    case 4:
        dias = "Quinta-feira";
        break;
    case 5:
        dias = "Sexta-feira";
        break;
    case 6:
        dias = "Sábado";
        break;
    default:
        alert("Este dia de semana não existe")
        break;
}


switch(mes){
    case 0:
        m = "Janeiro";
        break;
    case 1:
        m = "Fevereiro";
        break;
    case 2:
        m = "Março";
        break;
    case 3:
        m = "Abril";
        break;
    case 4:
        m = "Maio";
        break;
    case 5:
        m = "Junho";
        break;
    case 6:
        m = "Julho";
        break;
    case 7:
        m = "Agosto";
        break;
    case 8:
        m = "Setembro";
        break;
    case 9:
        m = "Outubro";
        break;
    case 10:
        m = "Novembro";
        break;
    case 11:
        m = "Dezembro";
        break;
    default:
        alert("Este mês não existe");
        break;
}




console.log("Hoje é %d de %s O dia da semana é %s",diames,m, dias);  //%d=decimal   %s=string (palavras)

console.log(datacompleta);
}
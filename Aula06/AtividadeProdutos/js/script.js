/*Adicionando um link de arquivo css no index html*/
window.document.head.innerHTML = `<link rel="stylesheet" href="css/styles.css" />`;

/*Criar a divCard para exibir as imagens dos produtos ao clicar na foto de miniatura do produto*/
const divCard = document.createElement('div');

/*Definir um atributo class para a divCard com o nome de divCard*/
divCard.setAttribute('class',"divCard");

/*Criar uma imagem para que ao clicar nas fotos dos produtos seja mostrado a foto selecionada*/
const imgCard = document.createElement('img');
imgCard.setAttribute('id','imgCard');
divCard.appendChild(imgCard);


/*Foi criado um elemento de html para a tag de link (a) para fechar a divCard. Quando o 
usuario clicar no botão fechar será chamada uma função que recolhe a divCard*/
const fechar = document.createElement('a');
fechar.innerHTML = "fechar";
fechar.setAttribute('class',"fechar");
divCard.appendChild(fechar);

fechar.onclick = function(){
    // document.getElementsByName("divCard")[0].style.height = "0vh";
    document.getElementsByClassName("divCard")[0].style.height = "0vh";
    document.getElementById("imgCard").style.opacity = "0"; //foto desaparece quando clica fechar

}


const body = window.document.body;

function carregarProdutos(){
    const header = document.createElement('header');
    const h1 = document.createElement('h1');
    h1.innerHTML = "Galeria de Produtos";
    header.appendChild(h1);

    const main = document.createElement('main');
    var i = 0;
    while(i < listaProdutos.length){

        var divProduto = document.createElement('div');
        var imgProduto = document.createElement('img');
        var h2NomeProduto = document.createElement('h2');
        var h3MarcaProduto = document.createElement('h3');
        var pPreco = document.createElement('p');

        divProduto.setAttribute('class','divProduto');

        imgProduto.setAttribute("src", listaProdutos[i].thumbnail);
        imgProduto.setAttribute("class", "imgProduto")

        h2NomeProduto.innerHTML = listaProdutos[i].title;
        h3MarcaProduto.innerHTML = listaProdutos[i].brand;
        pPreco.innerHTML = listaProdutos[i].price

        divProduto.appendChild(imgProduto);
        divProduto.appendChild(h2NomeProduto);
        divProduto.appendChild(h3MarcaProduto);
        divProduto.appendChild(pPreco);
        // main.appendChild(divProduto);
        
        // main.innerHTML += divProduto;
        // main.innerHTML += "<ddjkjj>"
        
        
        var divMiniatura = document.createElement("div");

        divMiniatura.setAttribute("class", "divMiniatura");

        var x = 0;
        while( x < listaProdutos[i].images.length){
            var imgMiniatura = document.createElement("img");
            imgMiniatura.setAttribute("src", listaProdutos[i].images[x]);
            imgMiniatura.setAttribute("class","imgMiniatura");
           
            imgMiniatura.addEventListener("click",exibirImagem.bind(this, listaProdutos[i].images[x]));
            
            divMiniatura.appendChild(imgMiniatura);

            // imgProduto.setAttribute("src", listaProdutos[i].images[x]);  //<img src="">
            // imgProduto.setAttribute("class","imgMiniatura");
            // divMiniatura.appendChild(imgProduto);
            x++;
        }
        divProduto.appendChild(divMiniatura);
        main.appendChild(divProduto);

        // var x = 0;
        // while(x < listaProdutos[i].images.length){
        //     imgProduto.setAttribute('src',listaProdutos[i].images[x]);
        //     divProduto.innerHTML+="<br>";
        //     divProduto.appendChild(imgProduto)
        //     x++;
        // }
        i++;
    }
    body.appendChild(divCard);
    body.appendChild(header);
    body.appendChild(main);

}

body.addEventListener("load", carregarProdutos());

function exibirImagem(foto){
    // alert("Olá");
    document.getElementsByClassName("divCard")[0].style.height = "60vh";
    document.getElementById("imgCard").src = foto;
    document.getElementById("imgCard").style.opacity = "1";
}
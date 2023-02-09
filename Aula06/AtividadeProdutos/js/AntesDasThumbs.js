window.document.head.innerHTML = `<link rel="stylesheet" href="css/styles.css" />`;

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

        imgProduto.setAttribute("src", listaProdutos[i].thumbnail);
        imgProduto.setAttribute("class", imgProduto)

        h2NomeProduto.innerHTML = listaProdutos[i].title;
        h3MarcaProduto.innerHTML = listaProdutos[i].brand;
        pPreco.innerHTML = listaProdutos[i].price

        divProduto.appendChild(imgProduto);
        divProduto.appendChild(h2NomeProduto);
        divProduto.appendChild(h3MarcaProduto);
        divProduto.appendChild(pPreco);
        main.appendChild(divProduto);

        // main.innerHTML += divProduto;
        // main.innerHTML += "<ddjkjj>"
        
        var x = 0;
        while(x < listaProdutos[i].images.length){
            imgProduto.setAttribute('src',listaProdutos[i].images[x]);
            divProduto.innerHTML+="<br>";
            divProduto.appendChild(imgProduto)
            x++;
        }
        i++;
    }

    body.appendChild(header);
    body.appendChild(main);

}

body.addEventListener("load", carregarProdutos());
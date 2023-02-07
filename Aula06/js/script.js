window.document.head.innerHTML = `<link rel="stylesheet" href="css/styles.css">`;


/*Criação de uma referencia de um corpo da página (body); como constante para não
ficar utilizando o comando completo window.document.body várias vezes*/
const body = window.document.body;

/*A função paginaFilmes exibe todos os filmes que estão na coleção listaFilmes. Para cada filme será criado
um html via javascript para exibí-lo */
function paginaFilmes(){
/*Para cada filme será criado um grupo de tags html que irá exibir as informações dos filmes. Estas tags serão criadas 
usando o comando createElement e assim poderemos adicionar informações a elas. Abaixo foi criada tag header e depois h1*/

    const header = document.createElement('header');
    // window.document.body.appendChild(header);
    const h1 = document.createElement('h1');
    h1.innerHTML = 'Lista de Filmes';
    header.appendChild(h1);

    const main = document.createElement('main');


    var pos = 0; //Auxilia na contagem da estrutura de repetição
    while(pos < listaFilmes.length){
    // const divFilme = document.createElement('div');
    // const imgFilme = document.createElement('img');
    // const h2Titulo = document.createElement('h2');
    // const pLancamento = document.createElement('p');
    var divFilme = document.createElement('div');
    var imgFilme = document.createElement('img');
    var h2Titulo = document.createElement('h2');
    var pLancamento = document.createElement('p');

    // divFilme.setAttribute('class','divFilme');
    // imgFilme.setAttribute('src',`${caminho}${listaFilmes[0].poster_path}`);
    // imgFilme.setAttribute('class', 'imgFilme');
    // h2Titulo.innerHTML = listaFilmes[0].title;
    // pLancamento.setAttribute('class','pLancamento');
    // pLancamento.innerHTML = listaFilmes[0].release_date;
    
    divFilme.setAttribute('class','divFilme');
    imgFilme.setAttribute('src',`${caminho}${listaFilmes[pos].poster_path}`);
    imgFilme.setAttribute('class', 'imgFilme');
    h2Titulo.innerHTML = listaFilmes[pos].title;
    pLancamento.setAttribute('class','pLancamento');
    pLancamento.innerHTML = listaFilmes[pos].release_date;

    divFilme.appendChild(imgFilme);
    divFilme.appendChild(h2Titulo);
    divFilme.appendChild(pLancamento);
    main.appendChild(divFilme);
    pos++;
    }
    
    
    body.appendChild(header);
    body.appendChild(main);

}
// window.document.body.addEventListener("load",paginaFilmes());
body.addEventListener("load",paginaFilmes());
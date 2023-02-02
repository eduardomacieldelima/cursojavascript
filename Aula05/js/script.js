// console.log(cidades);

/*A função carregar dados é utilizada para carregar e
exibir os dados relacionados a idade, cidade e produtos
em controles select do HTML e para isso estamos usando 
uma estrutura de repetição fazenbdo contagem de 18 a 90 
anos para a idade, enquante que para a cidade e produtos, 
usamos o laço for para ler o array de cidades e produtos.*/

function carregardados( ){

    /*foi criado constantes como referencia aos controles de
     formulario html. A idéia é não ficar escrevendo o comando 
     document várias vezes*/
    const nome = document.getElementById("nome");
    const idade = document.getElementById("idade");
    const cidade = document.getElementById("cidade");
    const prod = document.getElementById("prod");

    /*foi adicionado um option ao select da idade*/

    idade.innerHTML = `<option>Selecione a sua Idade</option>`;
    /*para preencher a idade de 18 a 90 anos, fizemos uma estrutura
    de repetição com for, onde é criado um elemento option com a idade de 18 a 90 dentro do select da idade*/

    for(let i = 18; i <=90; i++){
        idade.innerHTML += `<option>${i}</option>`;
    }

    /*adicionado um option ao controle select da cidade*/
    cidade.innerHTML = `<option>Selecione uma Filial</option>`;

    /*esta estrutura de repetição foi criada para ler todo o conteúdo do array cidades e obter uma cidade por vez
    e assim criar um controle option para cada cidade e adicionar ao controle select*/

    for(let i = 0; i<=3; i++){
        cidade.innerHTML += `<option>${cidades[i]}</option>`;
    }

    prod.innerHTML = `<option>Selecione o Produto</option>`;

    /*nesta estrutura de repetição estaMOS obtendo os produtos do array produtos. exibindo os nomes dos produtos 
    por meio do controle option. neste caso 
    o nome do produto é uma propriedade do array produtos, assim foi necessário adicionar um ponto depois do colchetes
    para acessar esta propriedade.  Também foi adicionado ao controle option o atributo value, que determinaqual o valor
    da opção selecionada pelo usuario. No value foi atributo o valor do id do produto.*/

    for(let i = 0; i<=2; i++){
        // prod.innerHTML += `<option onclick=${alert(`Oi`)}>${produtos[i].nomeproduto}</option>`;
        // prod.innerHTML += `<option value=${produtos[i].nomeproduto}>${produtos[i].nomeproduto}</option>`;   //De fora é exibido p/ o usuário
        prod.innerHTML += `<option value=${produtos[i].idproduto}>${produtos[i].nomeproduto}</option>`;
    }
    
}


//Criar nova função exibir produto
// function exibirProduto(id){
    // console.log(id);



/*Esta função é utilizada para encontrar um determinado produto no array de produtos quando o usuário 
seleciona um produto na pagina html. Ao selecionar o produto o id do produto é passado via parametro para
esta função e então é utilizado uma estrutura de repetição para localizar o produto no array e 
exibi-lo em uma div*/    
function exibirProduto(id){

    const rsprod = document.getElementById("rsprod");

    /*O for realiza uma leitura de ponta a ponta afim de encontrar o id passado para a função no array de produtos
    comparando o id passado com o id presente no array de produtos. Ao encontrar o id que o usuario passou a estrutura de 
    repetição é forçada a parar com o comando break e os dados do produto são adicionados ao div que está na página*/

    for(let i=0; i<=2; i++){
        if(produtos[i].idproduto == id){
            // console.log("Achei");
            // console.log(produtos[i].marca);
            rsprod.innerHTML = produtos[i].nomeproduto;
            rsprod.innerHTML += produtos[i].marca;
            rsprod.innerHTML += produtos[i].preco;
            break; //Força a parada do laço(for)
    }
}
}
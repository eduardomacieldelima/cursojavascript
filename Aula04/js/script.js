/*Comparação entre variável e array, como obter dados
 de uma variável e um array
 */

 var nome = "Pedro,Paulo"; 
 console.log(nome);
 //exibir apenas o Paulo
 console.log(nome.substring(6,11));

 //Criando um Array para os nomes
 const nomes = ["Pedro","Paulo"];
 console.log(nomes);
 //exibir apenas o Paulo
 console.log(nomes[1]);


//  nomes = "Olá";
//  console.log(nomes);


//Vamos adicionar mais nomes ao array
//usaremos o comando push

nomes.push("Roberto");
console.log(nomes);

//exibir o último nome
console.log(nomes[nomes.length-1]) //length = quantidadde

//adicionar mais um nome
nomes.push("Vanessa");
console.log(nomes);
console.log("------------------------------------");
//Vamos criar dois objetos de produtos de informática
prod1 = {
    nome:"Mouse",
    marca:"Microsoft",
    preco:150.00            //ultimo não vai virgula
};
prod2 = {
    nome:"Teclado",
    marca:"Microsoft",
    preco:180.00            //ultimo não vai virgula
};
//vamos criar um array de produtos
const produtos = [prod1,prod2];
console.log(produtos);
//exibir o produto1 prod1
//console.log(prod1); //pegando a linha35

console.log(produtos[0]);

//exibir a marcado produto
console.log(produtos[0].marca);
console.log("------------------------------------");

//criar um array de objetos cliente
const clientes = [
    {                       //primeiro objeto
        nome:"Tadeu",
        idade:25,
        cidade:"Leme"
    },
    {                       //segundo objeto
        nome:"Fernanda",
        idade:38,
        cidade:"Guarulhos"
    }
];
console.log(clientes);
//vamos adicionar um novo cliente
clientes.push({
    nome:"Gustavo",
    idade:30,
    cidade:"São Paulo"
});
console.log(clientes);


//*********************************************************/

//exibir os produtos nas div no navegador
var pnome = produtos[0].nome;
var pmarca = produtos[0].marca;
var ppreco = produtos[0].preco;

// document.getElementById("produto1").innerHTML = pnome;  //innerHTML pode ser incluidos tags html e innertext somente texto
// document.getElementById("produto1").innerHTML += pmarca; //+ acumula os dados
// document.getElementById("produto1").innerHTML += ppreco; 

//criar uma constante para exibir os dados do produto na div 
const saida = "<h2>"+pnome+"</h2><p class='m'>"+pmarca+"</p><p class='p'>"+ppreco+"</p>";

//const saida = "<h2>"+pnome+"</h2><p class=\"m\">"+pmarca+"</p>" 

document.getElementById("produto1").innerHTML = saida;

//exibir os dados do produto2
//vamos montar os dados de saída em uma constante
//usando template string

const saida2 = `<h2>${produtos[1].nome}</h2>
               <p class='m'>${produtos[1].marca}</p>
               <p class='p'>${produtos[1].preco}</p>`;

document.getElementById("produto2").innerHTML = saida2;





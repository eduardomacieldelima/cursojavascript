//Arquivo de script para a função ola
function ola(){
    alert('olá Mundo!');
}
/*
Dentro da página Html terá um botão com um
ID chamado btnClick. Ao clicar nesse botão
será chamado a função olá. Que executa uma
mensagem com o alert
*/
// document.getElementById('btnClick').onclick = ola;

// declaração de variáveis --- SEPARADO POR VIRGULA
var nome;
var numero1,numero2;
var resultado;
nome = ""; // transformou variável String = texto
numero1 = 0;  // transformou variável em número ""
numero2 = 0;  // transformou variável em número ""
resultado = 0;  // transformou variável em número ""

numero1 = prompt("Digite um Valor");
numero2 = prompt("Digite outro Valor");
resultado = numero1 * numero2;

console.log("A multiplicação entre o valor %d e %d é %d", numero1,numero2,resultado);   //%d = decimal

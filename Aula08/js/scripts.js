window.document.body.onload = function(){
    //Vamos chamar a função soma com a passagem de números de um array
    var numeros = [10, 30, 5, 8, 20];
    soma(numeros);


    //var valores = prompt("Digite números separados por vírgula");


    /*O comando aplicado a variável valores é capaz de quebrar os números digitados pelo usuário
    onde há virgula e assim gerar um array com esses números */
    // var n = valores.split(",");
    // console.log(n);
    // var np = [];
    // for(var i = 0 ; i <n.length ; i++) {
    //     np.push(parseInt(n[i]));
    // }
    // console.log(np);
    // maior(np);
    // menor(np);




    const inputNome = document.createElement('input');
    inputNome.setAttribute("paceholder","Digite o seu nome");
    inputNome.onblur = function() {
        inputNome.value = mensagem(inputNome.value);
        console.log(inputNome.value);
        window.document.title = mensagem(inputNome.value);
    }
    window.document.body.appendChild(inputNome);


    // var nome = prompt("Digite o seu nome");
    // inputNome.value = msg(nome);

    // var ano = prompt("Digite um ano");
    // inputNome.value = anobissexto(ano);

    // console.log(Math.random());
    // console.log(Math.round(1+Math.random()*254));



    window.document.body.innerHTML = paletaCores(30,50);

    // window.document.body.style.backgroundColor = paletaCores(0,0);
    // console.log(paletaCores(0,0));

}
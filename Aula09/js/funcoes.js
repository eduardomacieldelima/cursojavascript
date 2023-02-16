// function media(array_numeros){
//     let rs = 0;
//     for(var i = 0; i < array_numeros.length; i++){
//         rs += array_numeros[i];  //pega o proximo e soma com o anterior
//     }
//     return rs / array_numeros.length; //divisão
// }

// const media2 = function(array_numeros){
//     let rs = 0;
//     for(var i = 0; i < array_numeros.length ; i++){
//         rs += array_numeros[i];
//     }
//     return rs / array_numeros.length; //divisão
// }

// const media3 = (array_numeros) => {
//     let rs = 0;
//     for (var i = 0; i < array_numeros.length; i++){
//         rs += array_numeros[i];
//     }
//     return rs / array_numeros.length; 
// };

// function exibir(cli,p){
//     console.log(cli.nome);
//     console.log(cli.produtos);
// }

// function getusers(){
//     return new Promise((resolve, reject) => {
        
//         setTimeout(()=> {

                
        
//         resolve([
//             {user:"João", email:"joao@gmail.com"},
//             {user:"paulo", email:"paulo@gmail.com"}
//         ])
    
//     },5000)
    
// })
// }

// // getusers().then().catch()

// function mostrar(usuarios){
//     console.clear();
//     console.log(usuarios);
// }

// const resultado = getusers();
// resultado.then(mostrar);


function listarFilmes(){
    return new Promise((resolve, reject) => {
        resolve(listaFilmes);
        reject("Erro ao tentar executar");
    })
}

listarFilmes().then((x)=>{
    console.log(x);
}).catch((e) => {
    console.error(e);
});
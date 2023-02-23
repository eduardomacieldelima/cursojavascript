// function dizOi(){
//     console.log("Oi");
// }
// window.setInterval(dizOi, 2000);



// window.setInterval(() => {
//     console.log("Oi");    
// }, 2000);


// let x = 1;
// window.setInterval(() => {
//     console.log(`Contei ${x}`);
//     x++;
// }, 1000);


const quadro = document.querySelector(`#quadro`);
// let x = 50;
// let r = 10;
// // let x = 60;
// // let x = 0;
// window.setInterval(() => {
//     //alterar os estilos de largura e altura do quadro
//     // quadro.style.width = "500px";
//     // quadro.style.height = "500px";
//     // x+=10;
//     x+=1; //ou x++;
//     quadro.style.width = `${x}px`;
//     quadro.style.height = `${x}px`;
//     quadro.style.transform = `rotate(${r}deg)`;
//     // quadro.style.borderRadius = `${r}px`;
//     quadro.style.borderRadius = `${r / 2}px`;
//     r++;
//     // x+=10;    
// // }, 3000);
// // }, 500);
// }, 100);




// let pY = quadro.style.top;
// let pY = -500;

// window.setInterval(() => {
//     console.log(quadro.style.top)
//     quadro.style.top = `${pY}px`;
// //     pY++;  
// // }, 1000);

// if(pY>=10){
//     pY = 10;
// }

// pY+= 5;  
// }, 50);




// let t = -500;
// const quadroA = window.setInterval(() => {
//     console.log(quadro.style.top);
//     quadro.style.top = `${t}px`;
//     if(t >= 10) {
//         window.clearInterval(quadroA);
//     }
//     t += 2;
// }, 20);


// window.document.body.onmousemove = () => {
//     console.log(event.clientX, event.clientY);
// };







// let pX = 0;
// let pY = 0;

// // quadro.onclick = () =>{
// document.body.onclick = (event) =>{

// const mov = window.setInterval(() => {

//     if(pX == event.clientX){
//         clearInterval(mov);
//     }
//     quadro.style.position = "absolute";
//     quadro.style.top = `${event.clientY}px`;
//     quadro.style.left = `${event.clientX}px`;
// }, 20);
// };


// function relogio(){
//     var tempo = new Date();
//     var hora = tempo.getHours();
//     var minuto = tempo.getMinutes();
//     var segundo = tempo.getSeconds();

//     quadro.innerHTML = `${hora}:${minuto}:${segundo}`;
// }
// window.setInterval(relogio, 1000);
const body = document.querySelector("body");
const button = document.querySelector("#btn");
const colors = ["violet", "red", "green", "pink", "blue"];

button.style.position="absolute";
button.style.top="50%";
button.style.left="40%";
button.style.width="10rem";
button.style.padding="10px";
   
body.style.backgroundColor = "violet";
button.addEventListener('click', function(){
    const colorIndex= parseInt(Math.random()*colors.length);
    body.style.backgroundColor = colors[colorIndex];
})



//  button.addEventListener("click", function (){
//     for (let i = 0; i < colors.length; i++) {
//      body.style.backgroundColor = i;
//     }
// })

// function getColor(){
//     for (let i = 1; i < colors.length; i++) {
//              body.style.backgroundColor = colors[i];
//             }
            
// }
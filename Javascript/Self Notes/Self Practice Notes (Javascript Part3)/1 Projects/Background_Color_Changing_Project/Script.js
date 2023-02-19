console.log("Hello World");


var body=document.body;
var button= document.querySelector(".button");

const id_1=setInterval(()=>{   
    var Red = Math.floor(Math.random()*255);
    var Green = Math.floor(Math.random()*255);
    var Blue = Math.floor(Math.random()*255);
    var rgb=`rgb(${Red}, ${Green}, ${Blue})`;
    body.style.background=rgb;
    // console.log(rgb);
},1000)

button.addEventListener('click',()=>{
    clearInterval(id_1);
    button.textContent=body.style.background;
    console.log("Color Changing Stopped!!!");
});


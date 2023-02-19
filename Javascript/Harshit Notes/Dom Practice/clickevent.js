const allButtons = document.querySelectorAll("button")
console.log(allButtons);



for(let button of allButtons){
    button.addEventListener("click", function(event){
    console.log(this);
    });
}

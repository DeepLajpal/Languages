// function provides an free space called prototype object

function hello(){
    console.log("This is a hello function")
}
function hello2(){
    console.log("This is a hello2 function")
}

hello();
hello2();
console.log(hello.prototype)
hello.isHappy="Yes iam happy";
console.log(hello.isHappy);
hello.prototype.isSing=()=>{
    return "Yes i can sing";
}
console.log("Hello " + hello.prototype.isSing())
hello2.prototype.isSpeak=()=>{
    return "Yes i can speak";
}
console.log("Hello " + hello2.prototype.isSpeak())
console.log(hello.prototype);



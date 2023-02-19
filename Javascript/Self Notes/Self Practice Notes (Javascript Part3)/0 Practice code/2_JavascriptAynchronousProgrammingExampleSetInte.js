// #setInterval Example

console.log("Script Start:-)");

var id=setInterval(()=>{
    console.log("inside setInterval");
},5000);

console.log("script End !!!");
clearInterval(id);
// #setTimeout


// Example:

console.log("hello World");
var id1 = setTimeout(()=>{
    console.log("Inside Set Timeout")
},0);
var id2 = setTimeout(()=>{
    console.log("Inside Set Timeout2")
},0);

console.log("setTimeout1 id is = "+ id1);
console.log("setTimeout2 id is = "+ id2);
clearTimeout(id1)
console.log("Script End")
var arr=[1,2,3,4,5]   
console.log(arr);
//or

// internally the javascripts creates an array with new keyword like this:
var arr2= new Array(1,2,3);
console.log(Array.prototype)
console.log(arr2);


// to get the prototype of arr 
console.log(Object.getPrototypeOf(arr))

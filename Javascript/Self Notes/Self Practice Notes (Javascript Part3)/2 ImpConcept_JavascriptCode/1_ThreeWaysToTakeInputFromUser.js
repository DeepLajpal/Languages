// 1 Way by taking al input as a String


// Note: We cannot use name as a variable name because because name is a existing property on window, that behaves a little different from normal variables
// Example:
const name1=prompt("Enter your name: ");
const age1=prompt("Enter your age: ");
console.log("Hello "+ name1 + ", Yay!!! your age is " + age1);
console.log(`typeof name: ${typeof name1} and typeof age: ${typeof age1}`)

// 2 way when we want input as a number in integer

// Example: 
const name2=prompt("Enter your name: ");
const age2=parseInt(prompt("Enter your age: "));
console.log("Hello "+ name2 + ", Yay!!! your age is " + age2);
console.log(`typeof name: ${typeof name2} and typeof age: ${typeof age2}`)

// 3 way when we want to input number as a floating point value

// Example: 
const name3=prompt("Enter your name: ");
const age3=parseInt(prompt("Enter your age: "));
const height3=parseFloat(prompt("Enter your height: "));
console.log("Hello "+ name3 + ", Yay!!! your age is " + age3);
console.log(`typeof name: ${typeof name3}, typeof age: ${typeof age3} and typeof height ${typeof height3}`)
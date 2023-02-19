// // difference between dot and bracket notaion
// const key = "email";
// const person = {
//     name: "harshit",
//     age: 22,
//     "person hobbies": ["guitar", "sleeping", "listening music"]

// }

// // console.log(person["person hobbies"]);
// // person[key] = "harshitvashisth@gmail.com";
// // console.log(person);

// person.key("harshitvashisth@gmail.com");
// console.log(person)
// function findTarget(array1, target){

// for(let i=0;i<array1.length;i++){
//     if (array1[i]===target){
//     return i;
//     }
// }
// return -1
// }

// console.log(findTarget([1,6,4,3,7,2,0,1],4))


// function power(number,pow){
//     return number**pow;
// }
// console.log(power(prompt("Enter a number"),prompt('Enter a power?')));

// // Create a function which take number and power as input and will return power of that number. Eg: number^power

// function isEven(number){
//     return number%2===0
// }
// console.log(isEven(4))



// const isOdd =function(number){
//     return number%2 !==0;
// }
// console.log(isOdd(5));



// const findTarget=(array,number)=>{
//     for(i=array.length-1; i>=0; i--){
//         if (array[i]=== number){
//             return i;
//         }
//     }
//     return -1;
// }

// console.log(findTarget([1,2,3,4,5], 4));


// function addall(...num){
//     sum=0;
//     for(i=0;i<=num.length-1;i++){
//         // sum+=num[i];
//         sum = sum +num[i];
//     }
//     return sum;
// }

// console.log(addall(1,2,1))

// const array1= [3,5,2,7];
// array1.forEach(function(number,index){
//     console.log(`${number}*2=${number*2}`)
// }
// )



// const users =[
//     {name: "harshit", age:20},
//     {name: "deep", age:21},
//     {name: "rohan", age:23},
//     {name: "aman", age:24},
// ]

// users.forEach(function(number, index){
//     console.log(number.name)
// }
// )

// const name1=users.map((user)=>{
//     return user.name;
// })
// console.log(name1)


// array1=[10,5,3,1];
// const newNumber = array1.reduce((accumulator, currentvalue)=> accumulator-currentvalue
// )
// console.log(newNumber);

const userCart = [
    {productId: 1, productName: "mobile", price: 12000},
    {productId: 2, productName: "laptop", price: 22000},
    {productId: 3, productName: "tv", price: 15000},
]

const total = userCart.reduce((accumulator, currentvalue)=>{
    return accumulator+ currentvalue.price
},0
)
console.log(total);

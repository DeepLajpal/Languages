// Some important function methods 
// call
// apply
// bind


function userInfo (){

console.log(`Your Name is ${this.firstName} and your age is ${this.age}.`);
} 


const person1 ={
    firstName: "Deep",
    age:25,
    about:userInfo
}
const person2 ={
    firstName: "rohan",
    age:27,
    about:userInfo
}
const person3 ={
    firstName: "sohan",
    age:26,
    about:userInfo
}


person1.about();
person2.about();
person3.about();



// call method
userInfo.call(person1);

// for adding extra element we use apply method
userInfo.call(person1,"deep","aman");
userInfo.apply(person1,["deep","aman"]);


// bind method returns function so we can store it in any variable
const newFunc = userInfo.bind(person2,"geeta","seeta")
newFunc()




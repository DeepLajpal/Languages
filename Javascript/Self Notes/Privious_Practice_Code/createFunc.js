// Version 1

// const createUser =(firstName,lastName,age,email,address)=>{
//     const user={};
//     user.firstName=firstName;
//     user.lastName=lastName;
//     user.age=age;
//     user.email=email;
//     user.address=address;
//     user.about = function(){
//         return `${this.firstName} is ${this.age} years old.`
//     }
//     user.is18 = function(){
//         if(this.age>18)
//         return "Yay:) Your age is Above 18"
//         else
//         return "oh!!!) Your age is Below 18"
//     }
//     return user
// }


// const user1=createUser('Deep',"lajpal",17,"falanaxyz@gmail.com","Rohini baag sector63");
// console.log(user1);
// console.log(user1.is18());
// console.log(user1.about());





// Version 2

// const userMethod={
// about:function(){
//     return `${this.firstName} is ${this.age} years old.`;
// },
// is18:function(){
//     if(this.age>18)
//     return "Yay:) Your age is Above 18";
//     else
//     return "oh!!!) Your age is Below 18";
// }
// }

// function createUser (firstName,lastName,age,email,address){
//     const user=Object.create(userMethod);
//     user.firstName=firstName;
//     user.lastName=lastName;
//     user.age=age;
//     user.email=email;
//     user.address=address;
//     return user
// }

// console.log(createUser.prototype);



// const user1=createUser('Deep',"lajpal",17,"falanaxyz@gmail.com","Rohini baag sector63");
// console.log(user1);
// console.log(userMethod.is18.call(user1));
// console.log(userMethod.about.call(user1));

// console.log(user1.is18());
// console.log(user1.about());







// Version 3


function createUser (firstName,lastName,age,email,address){
    const user={};
    user.firstName=firstName;
    user.lastName=lastName;
    user.age=age;
    user.email=email;
    user.address=address;
    return user
}


createUser.prototype.about=function(){
    return `${this.firstName} is ${this.age} years old.`;
};
createUser.prototype.is18=function(){
    if(this.age>18)
    return "Yay:) Your age is Above 18";
    else
    return "oh!!!) Your age is Below 18";
};

const user1=createUser('Deep',"lajpal",17,"falanaxyz@gmail.com","Rohini baag sector63");



console.log(createUser.prototype);


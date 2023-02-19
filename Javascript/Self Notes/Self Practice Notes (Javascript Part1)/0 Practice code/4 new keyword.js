// new keyword


// Constructor Function
function CreateTeam(firstName, lastName, age){ //this function is known as constructor function, it is known as becasue it constructs an objects for us.
    this.firstName=firstName;
    this.lastName=lastName;
    this.age=age;
}


// setting up new proto key value for createTeam function
CreateTeam.prototype.about=function(){
    console.log(this.firstName,this.age);
}


var user1=new CreateTeam("Deep","Lajpal",10);
// console.log(user1.firstName);
// user1.about();


// this for in loop check wheather which key is owned by CreateTeam function
for (let key in user1){
    if(user1.hasOwnProperty(key)){
        console.log(key);
    }
}
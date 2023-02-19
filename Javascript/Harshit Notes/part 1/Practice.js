// function func(){
//     let count=0
//     return function(){
//         if(count===0){
//             console.log("Hi, Thankyou for callme")
//             count++
//         }
//         else{
//             console.log("Mai already ek bar call ho chuka hun")
//         }
//     }
// }

// myfunc=func()
// myfunc()
// myfunc()
// myfunc()

// myfunc2=func()
// myfunc2()

// console.log(typeof firstname);

// console.log(myfunc)
// var myfunc=function(){
//     console.log("this is myfunc") 
// }
// console.log(myfunc)
// console.log(this)
// console.log(window)
// console.log(firstname)
// var firstname="AMan"
// console.log(firstname)

// Object Oriented Programming
// Stage 5

// class CreateUser{
//     constructor(firstName,lastName,email,age){
//         this.firstName=firstName;
//         this.lastName=lastName;
//         this.email=email;
//         this.age=age;
//     }

//     about(){
//         return `${this.firstName} is ${this.age} years old`;
//     }

//     is18(){
//         return this.age>=18;
//     }
// }
//     const user1=new createUser("Aman","Lajpal","A@gmail.com",22)
//     console.log(user1.about())
//     console.log(user1.is18())




// Stage 4


// function CreateUser(firstName,lastName,email,age){
//     this.firstName=firstName;
//     this.lastName=lastName;
//     this.email=email;
//     this.age=age;
// }

// CreateUser.prototype.about=function(){
//     return `${this.firstName} is ${this.age} years old`;
// }

// CreateUser.prototype.is18=function(){
//     return this.age>=18;
// }

// const user1=new CreateUser("Aman","Lajpal","A@gmail.com",22)
// console.log(user1.about())
// console.log(user1.is18())

// for(let key in user1){
//     if(user1.hasOwnProperty(key)){
//         console.log(key)
//     }
// }

// Stage 3


// function createUser(firstName,lastName,email,age){
//     user=Object.create(createUser.prototype);
//     user.firstName=firstName;
//     user.lastName=lastName;
//     user.email=email;
//     user.age=age;
//     return user
// }

// createUser.prototype.about=function(){
//     return `${this.firstName} is ${this.age} years old`;
// }

// createUser.prototype.is18=function(){
//     return this.age>=18;
// }

// const user1=createUser("Aman","Lajpal","A@gmail.com",22)
// console.log(user1.about())
// console.log(user1.is18())

// Stage 3

// extramethods={
//     about:function(){
//         return `${this.firstName} is ${this.age} years old`;
//     },
//     is18:function(){
//         return this.age>=18;
//     }
// }

// function createUser(firstName,lastName,email,age){
//     user=Object.create(extramethods)
//     user.firstName=firstName;
//     user.lastName=lastName;
//     user.email=email;
//     user.age=age;
//     user.about=extramethods.about
//     user.is18=extramethods.is18
//     return user
// }


// const user1=createUser("Aman","Lajpal","A@gmail.com",22)
// console.log(user1.about())
// console.log(user1.is18())

// Stage2
// extramethods={
//     about:function(){
//         return `${this.firstName} is ${this.age} years old`;
//     },
//     is18:function(){
//         return this.age>=18;
//     }
// }

// function createUser(firstName,lastName,email,age){
//     user={}
//     user.firstName=firstName;
//     user.lastName=lastName;
//     user.email=email;
//     user.age=age;
//     user.about=extramethods.about
//     user.is18=extramethods.is18
//     return user
// }


// const user1=createUser("Aman","Lajpal","A@gmail.com",22)
// console.log(user1.about())
// console.log(user1.is18())

// Stage1

// function createUser(firstName,lastName,email,age){
//     user={}
//     user.firstName=firstName;
//     user.lastName=lastName;
//     user.email=email;
//     user.age=age;
//     user.about=function(){
//         return `${this.firstName} is ${this.age} years old`;
//     }
//     user.is18=function(){
//         return this.age>=18;
//     }
//     return user
// }



// const user1=createUser("Aman","Lajpal","A@gmail.com",22)
// console.log(user1.about())
// console.log(user1.is18())


// this keyword in Arrow function looks for object one step above 

// bind

// function func1(hobbie){
//     console.log(this.name,this.age,hobbie)
// }
// obj1={
//     name:"Aman",
//     age:18,
// }
// const user=func1.bind(obj1,'playing chess')
// console.log(user())
// apply
// function func1(doing,hobbie){
//     console.log(this.name,this.age,hobbie,doing)
// }
// obj1={
//     name:"Aman",
//     age:18,
// }
// func1.apply(obj1,['playing chess',"painting"])

// call
// function func1(hobbie){
//     console.log(this.name,this.age,hobbie)
// }
// obj1={
//     name:"Aman",
//     age:18,
// }
// func1.call(obj1,'playing chess')

// functions inside Object

// obj1={
//     name:"Aman",
//     age:18,
//     func1:function(hobbie){
//         console.log(this.name,this.age,hobbie)
//     }
// }

// obj1.func1('cricket')

// Optional Chaining
// obj1={
//     id:1,
//     name:'aman',
//     // strange:{age:12,score:100}
// }

// console.log(obj1?.strange?.age)

// Clone using Object.assign

// obj1={
//     id:1,
//     name:'aman'
// }
// obj2=Object.assign({},obj1)
// obj1.age=13
// console.log(obj2)

// Map Object
// array1=['x','y']
// newMap= new Map()
// newMap.set("Name","Aman Lajpal")
// newMap.set("PlayerName","Eagle")
// newMap.set("Age","12")
// newMap.set(array1,1)

// console.log(newMap)
// console.log(newMap.get(array1))

// for(let m of newMap){
//     console.log(m)
// }

// newMap2=new Map([["firstName","Aman"],['lastName',"Lajpal"]])
// console.log(newMap2)

// userInfo={
//     id:1,
//     firstName:"Aman"
// }

// const extraInfo=new Map();
// extraInfo.set(userInfo,{lastName:"Lajpal", age:"18"})

// console.log(extraInfo)
// console.log(extraInfo.get(userInfo).lastName)

// SETS
// array=[1,2,3,4,5]
// set1= new Set(array)
// console.log(set1)

// set1.add(6)
// console.log(set1)

// set1.delete(2)
// console.log(set1)

// console.log(set1.has(3))

// lenght=0
// for (let element of set1){
//     length++
// }
// console.log(length)

// Method in Arrays:
// 1)forEach - forExample:
// array=[1,2,3,4,5]
// array1=[]
// array.forEach((element,index) => array1.push(element**index));
// console.log(array1)

// 2)Map - forExample
// array=[1,2,3,4,5]
// const array1=array.map((element,index)=>element**index)
// console.log(array1)

// 3)filter -forExample
// array=[1,2,3,4,5]
// const array1=array.filter((element,index)=>element+index===array[2])
// console.log(array1)

// 4)reduce -forExamples
// array=[1,2,3,4,5]
// const total=array.reduce((a,b)=>a+=b)
// console.log(total)

// 5)sort -forExample
// array=["a","A",1,2,"z"]
// array.sort()
// console.log(array)

// players=[
//     {playerId:1,playerName:"Aman",playerRank:"Bronze"},
//     {playerId:2,playerName:"Drishti",playerRank:"Golden"},
//     {playerId:3,playerName:"Deep",playerRank:"Silver"},
// ]

// players.sort((a,b)=>{
//     if(a.playerName>b.playerName){
//         return 1;
//     }
//     else{
//         return -1;
//     }
// })
// console.log(players)

// 6)find

// players=[
//     {playerId:1,playerName:"Aman",playerRank:"Bronze"},
//     {playerId:2,playerName:"Drishti",playerRank:"Golden"},
//     {playerId:3,playerName:"Deep",playerRank:"Silver"},
// ]

// const rankedPlayer=players.find((a,b)=>a.playerRank=="Golden")
// console.log(rankedPlayer)

// 7)every

// players=[
//     {playerId:1,playerName:"Aman",playerRank:"Bronze"},
//     {playerId:2,playerName:"Drishti",playerRank:"Golden"},
//     {playerId:3,playerName:"Deep"},
// ]

// const rankExistOrNot=players.every((a,b)=>a.playerRank)
// console.log(rankExistOrNot)

// 8)some


// players=[
//     {playerId:1,playerName:"Aman",playerRank:"Bronze"},
//     {playerId:2,playerName:"Drishti",playerRank:"Golden"},
//     {playerId:3,playerName:"Deep"},
// ]

// const anyRankExist=players.some((a,b)=>a.playerRank)
// console.log(anyRankExist)

// 9)fill

// array1= new Array(5).fill("Aman")
// console.log(array1)

// array=[2,4,6,7,2,1,13,23]
// array.fill(3,2,4)
// console.log(array)

// 10)splice

// array=[1,2,3,4,5,6,3]
// array.splice(2,3,0,0,0)
// console.log(array)

// --------------/----------------/-----------------

// const myArray = ["Hello", "catt", "dog", "lion"];

// const ans = myArray.find((string)=>string.length===3);
// console.log(ans);

// const numbers = [53, 57, 49, 52, 51];
// numbers.sort((a,b)=>b-a)
// console.log(numbers) 

// const numbers = [3,4,6,1,8];
// const squareNumber = numbers.reduce((number, index)=>{
//     return number+=index;
// });
// console.log(typeof squareNumber);


// const users = [
//     {firstName: "harshit", age: 23},
//     {firstName: "mohit", age: 21},
//     {firstName: "nitish", age: 22},
//     {firstName: "garima", age: 20},
// ]

// users.forEach(function(user, index){
//     console.log(`First Name is ${user.firstName} and user number is ${index+1}`)
// }
// )


// const person1 = {
//     firstName : "harsh",
//     age: 8,
//     about:`is our object`

// }

// console.log(person1.about)

// array1=[1,2,3]
// console.log(array1)

// class Animal{
//     constructor(name,age){
//         this.name=name
//         this.age=age
//     }
//     eat(){
//         return `${this.name} is eating`
//     }

//     isSuperCute(){
//         return this.age<=1;
//     }

//     isCute(){
//         return true;
//     }
// }

// const animal1=new Animal("Lion", 12)
// console.log(animal1.isCute())


// function multiplyAll(...numbers){
//     let tot=1;
//     for(let number of numbers){
//         tot*=number;
//     }
//     return tot
// }

// console.log(multiplyAll(1,2,3,1,4,2))

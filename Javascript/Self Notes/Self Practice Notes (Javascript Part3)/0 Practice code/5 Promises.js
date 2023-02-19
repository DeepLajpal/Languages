// Promises or Future value
// Before the name promises it is called future value
// Promises means we have promise something that we need to execute 
// Promise actual argument is also known as executor function

// #Promises Example:
var bucket=["fruits","vegetables","Masala"];
var myFriedRice = new Promise((resolve, reject)=>{
    if(bucket.includes("vegetables") && bucket.includes("Masala") && bucket.includes("noodle")){
        // resolve function can take anything as a actual arguments like array, objects,string, etc
        resolve("Fried Rice is ready"); 
    }else{
        // // reject function can take anything as a actual arguments like array, objects,string, etc
        
        reject("Fried rice not ready! Some ingredient not present.");
        
        // or

        // reject(new Error("Cannot make rice! Please Purchase more ingredients"))
    }
})

// consuming promises
myFriedRice.then((resolve2)=>{
    // jab promise resolve hoga
    console.log(resolve2);
},
    // jab promise reject hoja 
(Error)=>{
    console.log(Error)
});

// we just need to care about resolve not reject while consuming promises
myFriedRice.then((resolve2)=>{
    console.log(resolve2);
}).catch((Error)=>{
    // console.log(reject2);
    console.log(Error)
});


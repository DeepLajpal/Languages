const studentDetails={
    name:"Rohan",
    age:25,
    rollNum:01
}
const fruits =["apple","mango","banana", "Grapes"];

// iterating the Object using  in loop

for (let key in studentDetails){
    console.log(key);
}


// Iterating the Array using in loop
for (let key in fruits){
    console.log(key)
}

// iterating the Object using object.keys() for getting values
for (let key of Object.keys(studentDetails)){
    // console.log(key);
    console.log(studentDetails[key]);
}


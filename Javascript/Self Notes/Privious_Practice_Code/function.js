// function firstCharacter(string){
//     return string.slice(0,1);
// }
// console.log(firstCharacter("Rohan"));


// Find target in an given Array

// let count=0;
// function targetNum(anyarrs,anytargets){
//     for(let anytarget of anyarrs){
//         if(anytarget===anytargets)
//             console.log("Index of your target is ",' : ', count);
//         else
//             count++;
//     }
//     if (count===anyarrs.length)
//     return -1
// }



// let result =targetNum([2,8,7,9,5,4,],2);
// console.log(result);


// function expression conversion of above normal function


// let count=0;
// const targetNum= function(anyarrs,anytargets){
//     for(let anytarget of anyarrs){
//         if(anytarget===anytargets)
//             console.log("Index of your target is ",' : ', count);
//         else
//             count++;
//     }
//     if (count===anyarrs.length)
//     return -1
// }



// let result =targetNum([2,8,7,9,5,4,],2);
// console.log(result);



// arrow function conversion of above function expression

let count=0;
const targetNum= (anyarrs,anytargets)=>{
    for(let anytarget of anyarrs){
        if(anytarget===anytargets)
            console.log("Index of your target is ",' : ', count);
        else
            count++;
    }
    if (count===anyarrs.length)
    return -1
}



let result =targetNum([2,8,7,9,5,4,],9);
console.log(result);
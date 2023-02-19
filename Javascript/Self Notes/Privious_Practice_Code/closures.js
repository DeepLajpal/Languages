
// closures example 1

// function myFunction(power){
//     return function (number){
//             console.log(number**power);
//     }
// }

// let square = myFunction(2);
// square(5);
// console.log(square);



// closures example 2

function myfunc(){
    let counter = 0;

    return function(){
        if(counter==0){
        console.log("Hi, I'am Func1");
        counter++;
    }else{
        console.log("I am already called");
    }
}
}

let func = myfunc();
func();
func();
func();


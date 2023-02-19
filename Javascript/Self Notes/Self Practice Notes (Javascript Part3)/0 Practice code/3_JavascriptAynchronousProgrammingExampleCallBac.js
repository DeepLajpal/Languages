console.log("Script Start")
function getTwoNum(num1,num2,onSuccess,onFail){
    console.log(`${num1} ${num2}`)
    if(typeof num1=='number'&& typeof num2=='number'){
        onSuccess(num1,num2);
    }
    else{
        onFail()
    }
}

function onSuccess(num1,num2){
    console.log(num1 + num2);
}


function onFail(){
    console.log("Wrong Input!!!, Please pass correct datatype.")
}

getTwoNum(5,4,onSuccess,onFail);

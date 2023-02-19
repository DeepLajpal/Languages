var heading1=document.querySelector(".heading1");
var heading2=document.querySelector(".heading2");
var heading3=document.querySelector(".heading3");
var heading4=document.querySelector(".heading4");
var heading5=document.querySelector(".heading5");
var heading6=document.querySelector(".heading6");

console.dir(heading1);

// callback hell

    // setTimeout(()=>{
    //     heading1.textContent="one";
    //     heading1.style.color="red";
    //     setTimeout(()=>{
    //         heading2.textContent="two";
    //         heading2.style.color="violate";
    //         setTimeout(()=>{
    //             heading3.textContent="three";
    //             heading3.style.color="blue";
    //             setTimeout(()=>{
    //                 heading4.textContent="four";
    //                 heading4.style.color="orange";
    //                 setTimeout(()=>{
    //                     heading5.textContent="five";
    //                     heading5.style.color="yellow";
    //                     setTimeout(()=>{
    //                         heading6.textContent="six";
    //                         heading6.style.color="green";
                    
    //                     },1000);
    //                 },3000);
    //             },1000);
    //         },2000);
    //     },2000);
    // },1000);
    
    // ##################################################################################
// callback hell with function    

function colorChange(element, text, color, time, onSuccessCallback, onFailureCallback){
    setTimeout(()=>{
       if(element){
           element.textContent=text;
           element.style.color=color;
           if(onSuccessCallback){
                onSuccessCallback();
           }
       }else{
        if(onFailureCallback){
            onFailureCallback();
        };
       }
        
    },time)
}

// Pyramid Of Doom

colorChange(heading1, "One", "green", 1000,()=>{
    colorChange(heading2, "Two", "blue", 2000,()=>{
        colorChange(heading3, "Three", "violet", 3000,()=>{
            colorChange(heading4, "Four", "purpul", 4000,()=>{
                colorChange(heading5, "Five", "Orange", 5000,()=>{
                    colorChange(heading6, "Six", "red", 6000,()=>{
                    },()=>{console.log("Your element Heading6 does not exist")});
                },()=>{console.log("Your element Heading5 does not exist")});
            },()=>{console.log("Your element Heading4 does not exist")});
        },()=>{console.log("Your element Heading3 does not exist")});
    },()=>{console.log("Your element Heading2 does not exist")});
},()=>{console.log("Your element Heading1 does not exist")});


// const heading1 = document.querySelector(".heading1");
// const heading2 = document.querySelector(".heading2");
// const heading3 = document.querySelector(".heading3");
// const heading4 = document.querySelector(".heading4");
// const heading5 = document.querySelector(".heading5");
// const heading6 = document.querySelector(".heading6");
// const heading7 = document.querySelector(".heading7");
// setTimeout(() => {
//     heading1.style.color = "violet";
//     heading1.textContent="one";
//     setTimeout(() => {
//         heading2.style.color = "purple";
//         heading2.textContent="two";
//         setTimeout(() => {
//             heading3.style.color = "red";
//             heading3.textContent="three";
//             setTimeout(() => {
//                 heading4.style.color = "green";
//                 heading4.textContent="four";
//                 setTimeout(() => {
//                     heading5.style.color = "yellow";
//                     heading5.textContent="five";
//                     setTimeout(()=>{
//                         heading6.style.color="red";
//                         heading6.textContent="six";
//                         setTimeout(()=>{
//                             heading7.style.color="blue";
//                             heading7.textContent="seven";
//                          },2000)
//                      },3000)
//                 }, 2000)
//             }, 1000)
//         }, 2000)
//     }, 2000)
// }, 1000)


// const mainHeading = document.getElementById("main-heading");
// mainHeading.textContent="Hi I am Deep";
// console.dir(mainHeading);

const heading = document.querySelector("h1");

// console.dir(heading.parentNode);
const div= heading.parentNode;
div.style.color="white";
div.style.background="black";
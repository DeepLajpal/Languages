URL = "https://jsonplaceholder.typicode.com/posts"

const xhr = new XMLHttpRequest();
// console.log(xhr.readyState)
xhr.open("GET", URL)
// xhr.onreadystatechange=()=>{
//     if(xhr.readyState===4){
//         const response=xhr.response;
//         const data=JSON.parse(response);
//         console.log(data)
//     }
// }
xhr.onload = () => {
    const response = xhr.response;
    const data = JSON.parse(response);
    console.log(data)
}
xhr.send()
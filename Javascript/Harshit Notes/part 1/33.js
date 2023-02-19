// for of loop in array
const fruits = ["apple", "mango", "grapes", "fruit4", "fruit5"];
const fruits2 = [];

// for(let fruit of fruits){
//     fruits2.push(fruit.toUpperCase());
// }
// console.log(fruits2);

// for(let i=fruits.length; i>=0; i--){
//     console.log(fruits[i]);
// }

// fruits2.push(fruits);
// console.log(fruits2);

const YoutubeChannel= ['AmanLajpal', 'Deep Lajpal', 'TechnicalGuruji','Indies'];
const newYoutubeChannel =[];
for(let channel in YoutubeChannel){
    let names2=""
    for(let i=YoutubeChannel[channel].length-1; i>=0;i--){
        names2=names2 + YoutubeChannel[channel][i]
    }
    newYoutubeChannel.push(names2)
}
console.log(newYoutubeChannel)

let names="Aman Lajpal"
let names2=""
for(let i=names.length-1; i>=0;i--){
    names2=names2 + names[i]
}
console.log(names2)

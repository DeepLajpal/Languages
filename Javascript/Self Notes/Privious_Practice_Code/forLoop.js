const fruits =["apple","mango","banana", "Grapes"];
const fruits2=[];

for(let fruit of fruits){
    fruits2.push(fruit.slice(0));
    console.log(fruits2);
}


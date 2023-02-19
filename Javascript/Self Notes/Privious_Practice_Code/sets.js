const array = [1,2,1,3,4,3,5,8,7,7,9,5,6];
const newSets= new Set(array);
console.log(newSets);
let setLength=0;
for(let newSet of newSets){
    setLength++;
}
console.log(setLength);
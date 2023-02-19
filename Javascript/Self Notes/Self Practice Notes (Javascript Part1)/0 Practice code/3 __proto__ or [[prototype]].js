// __proto__ or [[prototype]] both means the same, Note:the prototype is completely different than __proto__ or [[prototype]]
// __proto__ or [[prototype]] every object have an proto, a proto stores the reference of another object, means when an object does not have the key value required by the user then it will search in the proto
// In ecma script documentation the __proto__ is represented as [[prototype]] but both are same


// Example: 
var obj1={
    key1:"value1",
    key2:"value2"
}

var obj2 = Object.create(obj1)
    obj2.key3="value3";

console.log(obj2.key3);
console.log(obj2.__proto__)

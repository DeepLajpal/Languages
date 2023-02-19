const products = [
    {productId:1, productName:"soap",price:1200},
    {productId:2, productName:"detergent",price:5000},
    {productId:3, productName:"laptop",price:400},
    {productId:4, productName:"iphone",price:550}
];

const lowToHigh = products.slice(0).sort((a,b)=>a.price-b.price);
console.log(lowToHigh);


const highToLow = products.slice(0).sort((a,b)=>b.price-a.price);
console.log(highToLow);
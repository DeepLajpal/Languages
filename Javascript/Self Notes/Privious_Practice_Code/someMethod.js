const products = [
    {productId:1, productName:"soap",price:1200},
    {productId:2, productName:"detergent",price:5000},
    {productId:3, productName:"laptop",price:400},
    {productId:4, productName:"iphone",price:550}
];


const priceCheck = products.some((product)=>product.price>4999);
console.log(priceCheck);
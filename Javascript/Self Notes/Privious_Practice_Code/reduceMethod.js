const users = [
    {userId:1, firstName:"deep",gender:"male"},
    {userId:1, firstName:"deep",gender:"male"},
    {userId:1, firstName:"deep",gender:"male"},
    {userId:2, firstName:"aman",gender:"male"}
];
const priceTotal =users.reduce((totalPrice,currentPrice)=>totalPrice + currentPrice.userId,0);
console.log(priceTotal);
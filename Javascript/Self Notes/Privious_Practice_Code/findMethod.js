const users = [
    {userId:1, firstName:"deep",gender:"male"},
    {userId:2, firstName:"rohan",gender:"male"},
    {userId:3, firstName:"amrit",gender:"male"},
    {userId:4, firstName:"raghuvir",gender:"male"}
];

const findById = users.find((user)=>user.userId===3)
console.log(findById);
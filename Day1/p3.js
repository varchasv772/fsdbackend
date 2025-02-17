const fs=require('fs');
//const data=fs.readFileSync("./data.text"); by this we got a data in binary formate
const data=fs.readFileSync("./data.text","utf8");
console.log(data);
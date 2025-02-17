const fs=require('fs');
const datas="my mother name is kusum rani"
fs.appendFile("./data.text",datas,(err)=>{
    if(err)
        console.log(err);
    console.log("data appended");
});
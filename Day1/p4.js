const fs=require('fs');
fs.readFile("./data.text","utf8",(err,data)=>{
    if(err)
        console.log(err)
    else
    console.log(data)
})
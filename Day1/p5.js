const fs=require('fs');
const read=()=>{
    fs.readFileSync("./data.text","utf8",(err,data)=>{
        if(err)
            console.log(err)
        else
        console.log(data)
    })

}

console.log("before reading")
read();  // by using function 
console.log("after reading")
// make diectory 
const fs=require("fs");
fs.mkdir("mydir",(err)=>{
    if(err) throw err;
    else
    console.log("directory created")
})
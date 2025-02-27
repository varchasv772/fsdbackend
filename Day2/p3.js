const http=require('http');
const fs=require('fs/promises');
const server=http.createServer(async (res,req)=>{
    res.setHeader('Content-Type','text/html');
    res.statusCode=200;
    const myhtml=await fs.readFile('./index.html');
    res.end(myhtml)
});

server.listen(9000,(err)=>{
    if(err)
        console.log("error",err);
    else
    console.log("server running")
})
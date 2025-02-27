const http=require('http');

const server=http.createServer((req,res)=>{
    res.writeHead(200,{"content-type": "text/html"});
    res.end('<h1 style="color:blue; font-size:34px; background-color:orange; padding:24px; text-align:center;">welcome to backend</h1><p style="color:blue; font-size:34px; background-color:orange; padding:24px; text-align:center;">My name is varchasv sharma</p>');
});
server.listen(9000,(err)=>{
    if(err)
        console.log("error starting",err)
    else
    console.log("server started to port 9000")
});
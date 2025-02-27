const http=require('http');

const server=http.createServer((res,req)=>{
    res.writeHead(200,{'Content-Type':'application/json'});
    let data=[{
        
            "id":1,
            "username":"varchasv",
            "password": "1234"
        },
        {
            "id":2,
            "username": "aastha",
            "password": "4567"
        },
        
    ];
    
    res.end(JSON.stringify(data));
});
server.listen(9000, (err)=>{
    if(err)
        console.log("error starting",err)
    else
        console.log("server starting at the port ")
});

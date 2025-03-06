const http = require('http');
const fs = require('fs/promises');
const { userInfo } = require('os');

const server = http.createServer(async (req,res)=>{
    res.setHeader('Content-type', 'application/json');
    res.statusCode =200;
    if (req.url==='/getdata' && req.method==='GET'){
        const data = await fs.readFIle('/data.json', 'utf8');
        res.end(JSON.stringify(data));
    }
    else if(req.url==='/setdata' && req.method==='POST'){
        let body='';
        req.on('data',chunk=>{
            body+=chunk;
        });
        req.on('end',async()=>{
            let users=[];
            users=await fs.readFile('./data.json');
            users=JSON.parse(users);
            const newid=users.length>0?users[users.length-1].id+1:1;
            const data=JSON.parse(body);
            data.id=newid;
            
            users.push(data);
            await fs.writeFile('./data.json',JSON.stringify(users,null,2));
            res.end(JSON.stringify({message:'Data Saved'}));
        });

    }
    else{}
})


server.listen(9001, () => {
    console.log("Server runnign on port 9001");
   //else console.log("Server started on port 9001");
});
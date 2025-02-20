const fs = require('fs');
const write=(data)=>{

        fs.writeFile("./mydir/data.txt",data,(err)=>{
            if(err)
                console.log("error writting file",err);
            else
            console.log("file writen successfully");
        });
 
}

write("aastha shama");

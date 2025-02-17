const fs = require('fs');
const write=(data)=>{

        fs.writeFile("./data.text",data,(err)=>{
            if(err)
                console.log("error writting file",err);
            else
            console.log("file writen successfully");
        });
 
}
console.log("before data")
write("my name is varchasv sharma i am pursuing btech from abes engineering college");
console.log("after writing");
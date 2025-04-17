const express=require('express');
const cors=require('cors');
const fs=require('fs/promises');

const app=express();
let users=[]

app.use(cors());
app.use(express.json());

//make a function called readdata which will read data from data.json and write it into users
const readdata=async()=>{
    users=JSON.parse(await fs.readFile('./data.json','utf8'));
}

const writedata=async()=>{
    await fs.writeFile('./data.json',JSON.stringify(users));
}


readdata();


// make a function for get data 
app.get('/users',async(req,res) =>{
    res.json(users);


});


// function for post data 
app.post('/users',async(req,res)=>{
    const {name, age}=req.body;  // these are the  parameter which we define 
    const newid=users.length>0? users[users.length-1].id+1:1;  // we generate the id for every newdata entry
    const newuser={id:newid,name,age};
    users.push(newuser); // push the new generated id with name and age 
    writedata(); // this writedata function will update the data 
    res.status(200).json({message:"user added successfully",data:newuser});
})

app.put('/users/:id',(req,res)=>{
    const uid=req.params.id;
    const {name,age}=req.body;
    const index=users.findIndex(user=>user.id==uid);
    if(!name||!age){
        res.status(400).json({message:"please provide the name and age"});
        return;
    }
    if(index==-1){
        res.status(404).json({message:"user not found"});

    }
    users[index].name=name;
    users[index].age=age;
    writedata();
    res.status(200).json({message:"user update successfully",data:users[index]});

})
// 2/4/2025
app.delete('/users/:id',(res,req)=>{
    const uid=req.params.id; // fetch the id and store in uid
    const index=users.findIndex(user=> users.id==uid);  //check if uid==user.id 
    if(index==-1){   // if they are not equal 
        res.status(404).json({message:"user not found"});

    }
    users.splice(index,1); // if they are equal
    writedata();
    res.status(200).json({message:'user deleted successfully'});

})


app.listen(9000,()=>{
    console.log("server start at port 9000");
})
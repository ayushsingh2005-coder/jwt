// JWT  consist of three things :
// 1.Header which contain algo EventCounts.apply. 
// 2.Payload which is data that we gonna store
// 3.signature and its details 

// we only have to concern about the data or payload section 


const express = require('express');
const app = express();
const jwt  = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

app.use(cookieParser());
app.get('/' , (req,res)=>{
    const token = jwt.sign({email:"ayush@example.com"},"secret")
    res.cookie("token" , token)
    res.send("send");
})
app.get('/read',(req,res)=>{
   let data = jwt.verify(req.cookies.token,"secret");
   console.log(data);
})

app.listen(5000 , ()=>{
    console.log(`server is listening on http://localhost:5000`);
    
})

// when we run the server and listen the request at server 5000 ,after reloading the server we will get a string in the console screen which is token
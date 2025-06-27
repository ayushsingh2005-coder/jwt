// SETTING UP THE COOKIES AND READING OF COOKIES
// --------------------------------------
const cookieParser = require('cookie-parser');
const express = require('express');
const app = express();

app.use(cookieParser())
app.get("/",function(req,res){
    res.cookie("name","harsh"); //setting the cookies
    res.send("done");
})

app.get("/read",function(req,res){
    console.log(req.cookies);
    // reading of  cookies
    res.send("read page");
})
app.listen(5000 , ()=>{
    console.log(`server is listening on http://localhost:5000`);
    
})

// ========================================
// COMPARISON OF PASSWORD WITH ITS GENERATED HASH -->> KNOWN AS DECRYPTION

const express = require('express');
const app = express();
const bcrypt = require('bcrypt');


app.get("/",function(req,res){
    
    bcrypt.compare("itsme","$2b$10$6.9johwVCgCGceJs1Q3jUOzGJ8D//D3eiI8SipNuW0LVgYhLwfpne", function(err, result) {
        console.log(result);
    // result == true
});
    res.send("working");
})

app.listen(5000 , ()=>{
    console.log(`server is listening on http://localhost:5000`);
    
})

//BCRYPT PACKAGE : it does encryption and decryption



// ENCRYPTION USING GENSALT(a random string) AND HASH 
// you can refer to npmjs.com 

const express = require('express');
const app = express();
const bcrypt = require('bcrypt');


app.get("/",function(req,res){
    
    bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash("itsme", salt, function(err, hash) {
        console.log(hash);
        
        // Store hash in your password DB.
    });

});
})

app.listen(5000 , ()=>{
    console.log(`server is listening on http://localhost:5000`);
    
})

//BCRYPT PACKAGE : it does encryption and decryption



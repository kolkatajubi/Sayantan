//dependencies
const express = require('express');
const bodyparser= require('body-parser');
const app = express();
//var http=require('http');
//var fs =require('fs');
var path=require('path');

app.use(bodyparser.urlencoded({
    extended: false
 }));

//parse application json
app.use(bodyparser.json());


//Database
const user1=["suvo","sayantan","manchester"];
const pass=["suvo","suvo1","united"];


//custom initialization
const ipaddress="127.0.0.1";
const port = 3002;

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/login.html'));
});

//listen
app.listen(port,ipaddress, () => console.log(`Server Started ${port}!`));

app.post('/submit',(req, res)=> {
    
     for(i=0;i<user1.length;i++)
     {
         if(req.body.username==user1[i] && req.body.password==pass[i] ) {
             console.log("User Exists");
             //res.json({Hello: "Success !!"});
             res.sendFile(path.join(__dirname +'/welcome.html'));
             break;
     }else{
            res.json({Hello: "Access Denied !!"});
     }
    }

  //   console.log(req.body.username);
        
    

});
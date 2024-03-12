const express = require('express');
const app = express();

app.use(express.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html');
});

app.get('/greet',(req,res)=>{
    res.send(`Hello! Goodmorning, ${req.query.name}`);
});

app.post('/greet',(req,res)=>{
    res.send(`Hello! Goodevening, ${req.body.name}`);
});

app.listen(8888,()=>{
    console.log('Server started at http://localhost:8888');
});
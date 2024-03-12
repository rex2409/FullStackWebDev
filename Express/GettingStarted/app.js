const express = require('express');
const PORT = 8888;
const app = express();

app.get('/',(req,res)=>{
    console.log(req);
    res.send("<h1>Hello World</h1");
});

// app.get('/greet/:name',(req,res)=>{
//     console.log(req);
//     res.send(`Hello! ${req.params.name}`);
// });

app.get('/greet',(req,res)=>{
    console.log(req);
    res.send(`Hello! Good${req.query.x} ${req.query.name}`);
});

app.listen(PORT,(err)=>{
    console.log(`Server started at http://localhost:${PORT}`);
});
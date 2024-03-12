const express = require('express');
const PORT = 8888;
const app = express();
const path = require('path');

app.use('/file',express.static(path.join(__dirname,'static')));

app.get('/',(req,res)=>{
    // console.log(__dirname);
    console.log(req);
    res.send("<h1>Hello World</h1>");
});

// app.get('/file',(req,res)=>{
//     // res.sendFile(__dirname+'/index.html');
//     res.sendFile(path.join(__dirname+'/index.html'));
// });

app.get('/server.js',(req,res)=>{
    res.send(`console.log('Here is the requested JS')`);
})

app.listen(PORT,(err)=>{
    console.log(`Server started at http://localhost:${PORT}`);
});
const http = require('http');
const port = 8080;
const fs = require('fs')

const server = http.createServer((req,res)=>{
    console.log(req.url);
    res.writeHead(200,{
        "Content-Type" : 'text/html'
    });

    if(req.url == '/') file = 'index.html';
    else if(req.url == '/profile') file = 'profile.html';
    else file = 'signin.html';

    fs.readFile(file,(err,data)=>{
        if(err){
            return console.log(err);
        }
        res.end(data);
    });
    //res.end("<h1 style = 'color : orange;'>Hello, Here is your requested data</h1>");
});
server.listen(port,(err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log('Server Started at',port);
});
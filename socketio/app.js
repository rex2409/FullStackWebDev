const path = require('path');
const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");
const PORT = 4444;

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, { /* options */ });

app.set('view engine','hbs');
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));

app.get('/',(req,res)=>{
    res.send("Hello");
})

app.get('/chat',(req,res)=>{
    res.render('chat')
})



const onConnection =  (socket) => {
   require('./scripts/chatapp/chatapp')(socket,io);
}



io.on("connection", onConnection);

httpServer.listen(PORT,()=>{
    console.log(`http://localhost:` + PORT);
});
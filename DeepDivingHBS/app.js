const express = require('express');
const app = express();

app.set('view engine','hbs');
app.use(express.urlencoded({extended:true}));

let tasklist = [];

app.get('/',(req,res)=>{
    res.render('index',{
        tasklist
    });

});


app.post('/addtask',(req,res)=>{
    tasklist.push(req.body.task);
    res.redirect('/')
})

app.listen(8888,()=>{
    console.log('Server started at http://localhost:8888');
})
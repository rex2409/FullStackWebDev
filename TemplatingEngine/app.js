//using HBS(Handlebarsjs)

const express = require('express');
const app = express();
const path = require('path');

//setup hbs engine
app.set('view engine','hbs');
// app.set('views','myhbs');//if views folder name is changed

app.get('/learnhbs',(req,res)=>{
    res.render('index.hbs',{
        title:'My Page'
    });
});



app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'index.html'));
});

app.listen(8888,()=>{
    console.log('Server started at http://localhost:8888');
});
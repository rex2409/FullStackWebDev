const path = require('path');
const express = require('express');
const app = express();
const PORT = 4444;
const {mongoConnect} = require('./database/database')

app.use(express.urlencoded({extended:true}));//to read body
app.use(express.json());
app.use(express.static(path.join(__dirname,'public')));//send static files to client

const requestHandler = require('./routes/todo');

app.use('/',requestHandler);

mongoConnect()
    .then(()=>{
        console.log('Successfully connected to the server');
        app.listen(PORT,()=>{
            console.log(`http://localhost:`+PORT);
        });
    })
    .catch((err)=>{
        console.log('Cannot connect to our App, since DB is not working');
    })
const path = require('path');
const express = require('express');
const app = express();
const PORT = 4444;
const mongoose = require('mongoose');
const hbs = require('hbs');

hbs.registerPartials(path.join(__dirname,'views','partials'));

app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({extended:true}));
app.set('view engine','hbs');

const routeHandler = require('./routes/blogsRoute');
app.use('/',routeHandler);

// mongoose.connect('mongodb://127.0.0.1:27017/myBlogs')//giving a database name
mongoose.connect('')//giving a database name
    .then(()=>{
        app.listen(PORT,()=>{
            console.log(`http://localhost:`+PORT);
        });
    }).catch((err)=>{
        console.log("Mongoose couldn't connect")
    })

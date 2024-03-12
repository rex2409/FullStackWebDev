const path = require('path');
const express = require('express');
const app = express();
const PORT = 4444;
const session = require('express-session');
const MongoStore = require('connect-mongo');
const flash = require('connect-flash');
const mongoose = require('mongoose');
require('dotenv').config()


app.set('view engine', 'hbs')
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));
app.use(flash());
//
app.use(session({
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({ mongoUrl: process.env.DB_PATH})
    // cookie: { secure: true }
  }))

app.get('/',(req,res)=>{
    // console.log(req.session)
    // res.send('welcome');
    res.redirect('/login');
})

const loginRoute = require('./routes/login');
const signupRoute = require('./routes/signup');
const profileRoute = require('./routes/profile');

app.use('/login',loginRoute);
app.use('/signup',signupRoute);
app.use('/profile',profileRoute);

app.get('/logout',(req,res)=>{
    req.session.destroy();
    // req.flash('msg','Logged out!')// make sure sessions are still present
    res.redirect('/');
})

mongoose.connect(process.env.DB_PATH).then(()=>{
    app.listen(PORT,()=>{
        console.log(`http://localhost:`+PORT);
    })
})
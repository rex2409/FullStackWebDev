const path = require('path');
const express = require('express');
const app = express();
const PORT = 4444;
const cookie = require('cookie');

app.use(express.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    let cookies = cookie.parse(req.headers.cookie || '');
    console.log(cookies.loggedIn)
    if(cookies.loggedIn){
        return res.redirect('/profile');
    }
    res.redirect('/login');
//     res.setHeader('Set-Cookie',
//         cookie.serialize(
//             'loggedIn',
//             String("true"), {
//                 // httpOnly: true,
//                 // maxAge: 60 * 60 * 24 * 7 // 1 week
//                 maxage: 10
//         }));
    res.send('Learning Cookies')
})

app.get('/login',(req,res)=>{
    let cookies = cookie.parse(req.headers.cookie || '');
    console.log(cookies.loggedIn)
    if(cookies.loggedIn){
        return res.redirect('/profile');
    }
    res.redirect('/login');
    res.setHeader('Set-Cookie',
        cookie.serialize(
            'loggedIn',
            String("true"), {
                maxage: 10
        }));
    res.send("Here is your login page");    
})

app.get('/profile',(req,res)=>{
    
    let cookies = cookie.parse(req.headers.cookie || '');
    console.log(cookies.loggedIn)
    if(cookies.loggedIn){
        return res.redirect('Welcome to the app');
    }
    res.redirect('/login');
})

app.get('random',(req,res)=>{
    let cookies = cookie.parse(req.headers.cookie || '');
    console.log(cookies.loggedIn);
    let loggedIn = (cookies.loggedIn === 'true');
    if(loggedIn){
        res.send('Your loggedIn key is true');
    }
    else{
        res.send('Your loggedIn key is false');
    }
})

app.listen(PORT,()=>{
    console.log(`http://localhost:`+PORT);
});
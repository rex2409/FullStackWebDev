const express = require('express');
const app = express();

function m1(req,res,next){
    console.log('pre Running m1');
    // console.log(req.query);
    // if(req.query.q == 1){
    //     return res.send('hello World');
    // }
    next();
    console.log('post Running m1');

}

function m2(req,res,next){
    console.log('pre Running m2');
    next();
    console.log('post Running m2');

}

function m3(req,res,next){
    console.log('pre Running m3');
    next();
    console.log('post Running m3');

}

// app.use(m1);
// app.use(m2);
// app.use(m3);
// app.use(express.urlencoded({extended:true}));//for post request// a middleware

app.get('/',m1,m2,m3,(req,res)=>{
    console.log('Pre sending response')
    res.send('Learning middleware')
    console.log('Post sending response')
});

app.listen(8888,()=>{
    console.log('Server started at http://localhost:8888');
});
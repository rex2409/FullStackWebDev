const path = require('path');
const express = require('express');
const router = express.Router();

// const profileController = require('../controller/profile');

// router.get('/',profileController.getProfile);

router.get('/',(req,res,next)=>{
    if(!req.user) return res.redirect('/login');
    console.log(req.user);
    res.render('profile',{
        username: req.user.username
    });
});

module.exports=router;
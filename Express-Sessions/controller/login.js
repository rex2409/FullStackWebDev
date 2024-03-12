const Users = require("../models/users");
const bcrypt = require('bcryptjs');
const saltRounds = 10;

module.exports.getLogin = (req,res)=>{
    if(req.session.username){
        return res.redirect('/profile');
    }
    res.render('login',{
        msg: req.flash('msg')
    });
}

module.exports.postLogin = async (req,res,next)=>{
    const {username,password} = req.body;
    if(username === req.session.username && password === req.session.password){
        return res.redirect('/profile');
    }
    try{
        let user = await Users.findOne({
            username
        })
        if(!user){
            req.flash('msg','Incorrect Username');
            return res.redirect('/login');
        }
        bcrypt.compare(password, user.password).then(function(result) {
            // result == true
            if(!result){
                req.flash('msg','Incorrect Password!')
                return res.redirect('/login');
            }
            else{
                req.session.username = username;
                req.session.password = password;
                return res.redirect('/profile')
            }
        });
    }catch(err){
        next(err);
    }
}
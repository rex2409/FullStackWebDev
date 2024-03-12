const Users = require("../model/user");
const bcrypt = require('bcryptjs');
const saltRounds = 10;

module.exports.getSignup = (req,res)=>{
    res.render('signup',{
        msg: req.flash('msg')
    });
}

module.exports.postSignup = async (req,res,next)=>{
    const{username,password}=req.body;
    try{
        let user = await Users.findOne({
            username
        }).exec();
        if(!user){
            try{
                bcrypt.hash(password, saltRounds).then(async function(hash) {
                    // Store hash in your password DB.
                    user = await Users.create({username,password:hash});
                });
                req.flash('msg','Signup Successful');
                return res.redirect('/login');
            }catch(err){
                next(err);
            }
        }
        else{
            req.flash('msg','User already exists!');
            return res.redirect('/signup');
        }
    }catch(err){
        next(err);
    }
    // res.send('Signup Successfull');
}
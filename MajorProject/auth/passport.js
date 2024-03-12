//all required startegies
const passport = require('passport');
const User = require('../model/user');
const LocalStrategy = require('passport-local')
const FacebookStrategy = require('passport-facebook')
const GoogleStrategy = require('passport-google-oauth20').Strategy;

// passport.use(new LocalStrategy(// DEPRECATED
//     function(username, password, done) {
//       User.findOne({ username: username }, function (err, user) {
//         if (err) { return done(err); }
//         if (!user) { return done(null, false); }
//         // if (!user.verifyPassword(password)) { return done(null, false); }
//         return done(null, user);
//       });
//     }
// ));

passport.use(new LocalStrategy(

  // {// We need to use this if we dont want to use the username 
  // //and password fields in the async function below

  // usernameField: 'email', 
  // passwordField: 'pass'
  // },

  async function(username, password, done) {
    try{
      let user = await User.findOne({ username: username })
      if (!user) return done(null, false);
      // if (!user.verifyPassword(password)) { return done(null, false); }
      return done(null, user);
    }catch(err){
      return done(err);
    }
  }
));

passport.use(new FacebookStrategy({
  clientID: "1101768444308062",
  clientSecret: "713bf5ed2675931a9b786cbe5bb30190",
  callbackURL: "http://localhost:4444/login/auth/facebook/callback"
},
async function(accessToken, refreshToken, profile, cb) {
  console.log("AccessToken: ", accessToken);
  console.log("refreshToken: ", refreshToken);
  console.log("profile: ", profile);
  try{
    let user = await User.findOne({
      fbId: profile.id
    })
    if(user) return cb(null,user);
    user = await User.create({
      fbAccessToken: accessToken,
      fbId: profile.id,
      username: profile.displayName,
      isAdmin: false
    })
    cb(null, user);
  }catch(err){
    cb(err, false);
  }
  
  // user = await User.findOrCreate({ facebookId: profile.id }, function (err, user) {
  //   return cb(err, user);
  // });
}
));

passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENTID,
  clientSecret: process.env.GOOGLE_SECRET_KEY,
  callbackURL: "http://localhost:4444/login/auth/google/callback"
},
async function(accessToken, refreshToken, profile, cb) {
  console.log("AccessToken: ", accessToken);
  console.log("refreshToken: ", refreshToken);
  console.log("profile: ", profile);
  try{
    let user = await User.findOne({
      googleId: profile.id
    })
    if(user) return cb(null,user);
    user = await User.create({
      googleAccessToken: accessToken,
      googleId: profile.id,
      username: profile.displayName,
      isAdmin: false
    })
    cb(null, user);
  }catch(err){
    cb(err, false);
  }
}
));

passport.serializeUser(function(user, done) {
    done(null, user.id);
});
  
passport.deserializeUser(async function(id, done) {
  try{
    let user = await User.findById(id);
    done(null, user);
  }catch(err){
    done(err, false);
  }
});


module.exports = passport;
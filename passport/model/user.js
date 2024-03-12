const mongoose = require('mongoose');
const {Schema} = mongoose;

const userSchema = new Schema({
    username: String, // String is shorthand for {type: String}
    password: String,
    fbId: String,
    fbAccessToken: String,
    googleId: String,
    googleAccessToken: String
});

module.exports = mongoose.model('User',userSchema);
  
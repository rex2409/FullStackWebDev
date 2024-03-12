//this file has become the collection
const mongoose = require('mongoose');

// 1 .schema
const { Schema } = mongoose;

const actorSchema = new Schema({
  name: String, // String is shorthand for {type: String}
  imageUrl: String,
  age:String
});
// 2. Associate schema with model
module.exports = mongoose.model('Actor', actorSchema);
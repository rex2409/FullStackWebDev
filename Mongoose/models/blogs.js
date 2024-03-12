//this file has become the collection
const mongoose = require('mongoose');

// 1 .schema
const { Schema } = mongoose;

const blogSchema = new Schema({
  title: String, // String is shorthand for {type: String}
  description: String,
  actor:{ type: Schema.Types.ObjectId, ref: 'Actor' }//reference to model name
});
// 2. Associate schema with model
module.exports = mongoose.model('Blog', blogSchema);
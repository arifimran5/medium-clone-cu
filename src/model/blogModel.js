const mongoose = require('mongoose');
const { Schema } = mongoose;

const blogSchema = new Schema({
  title: { type: String, trim: true },
  body: String,
  date: { type: Date, default: Date.now },
});

const Blog = mongoose.model('Blog', blogSchema);

module.exports = { Blog };

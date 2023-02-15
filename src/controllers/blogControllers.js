const { Blog } = require('../model/blogModel');
const { Remarkable } = require('remarkable');

const showAllBlogs = async (req, res) => {
  const allBlogs = await Blog.find();
  res.render('blogs', { blogs: allBlogs, count: allBlogs.length });
};

const showOneBlog = async (req, res) => {
  const { id } = req.params;

  const blog = await Blog.findById(id);

  if (!blog) {
    res.render('error');
  }
  const md = new Remarkable();
  const parsedBody = md.render(blog.body);
  const date = new Date(blog.date).toLocaleDateString();
  res.render('blogpage', { body: parsedBody, title: blog.title, date });
};

const createBlog = async (req, res) => {
  const { title, body } = req.body;

  if (title && body) {
    await Blog.create({ title, body });
  }
  res.json({ message: 'success' });
};

module.exports = { showAllBlogs, showOneBlog, createBlog };

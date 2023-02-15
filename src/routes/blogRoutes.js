const express = require('express');
const { showAllBlogs, showOneBlog } = require('../controllers/blogControllers');

const blogRouter = express.Router();

blogRouter.get('/', showAllBlogs);
blogRouter.get('/:id', showOneBlog);

module.exports = blogRouter;

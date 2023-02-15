const { Blog } = require('../model/blogModel');

const blogs = [
  {
    title: 'Test Article 1',
    body: 'This is the body text of test article 1',
  },
  {
    title: 'Test Article 2',
    body: 'This is the body text of test article 2',
  },
  {
    title: 'Test Article 3',
    body: 'This is the body text of test article 3',
  },
];

const seed = () => {
  Blog.insertMany(blogs);
};

module.exports = { seed };

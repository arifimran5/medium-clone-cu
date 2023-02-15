const express = require('express');
const path = require('path');
const { initDB } = require('./utils/db');
const blogRouter = require('./routes/blogRoutes');
const { createBlog } = require('./controllers/blogControllers');

// init app
const app = express();
// init db
initDB();

// deault middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// view engine setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
// static files
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('index', { title: 'Medium Clone' });
});

// routes
app.use('/blogs', blogRouter);

app.get('/blog/new', (req, res) => {
  res.render('create');
});
app.post('/blog/new', createBlog);

app.listen(8080, () => console.log('server started on port 8080'));

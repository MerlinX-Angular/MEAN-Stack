var path = require('path');
var express = require('express');
var cors = require('cors');
var bodyParse = require('body-parser');
var mongoose = require('mongoose');
var Blog = require('./blog-scheme.js');
const app = express();
const router = express.Router();

app.use(cors());
app.use(bodyParse.json());

mongoose.connect('mongodb://other:test123@ds215093.mlab.com:15093/meanstack');
const PORT = process.env.PORT || 8080;

const connection = mongoose.connection;
app.use(express.static(path.join(__dirname, 'dist')));
connection.once('open', ()=> {
  console.log('connection into mongoDb is succesful');
});


router.route('/blogs').get((req, res) => {
  Blog.find((err, blogs) => {
    if(err)
    console.log(err)
    else
    res.json(blogs)
  })
})

router.route('/blogs/:id').get((req, res) => {
  Blog.findById(req.params.id,(err, blog) => {
    if(err)
    console.log(err)
    else
    res.json(blog)
  })
})

router.route('/blogs/add').post((req, res) => {
  const post = new Blog({
    _id: mongoose.Types.ObjectId(),
    title : req.body.title,
    description : req.body.description,
    author : req.body.author,
    image : req.body.image,
    date: req.body.date,
    imageTitle: req.body.imageTitle,
    imageSubtitle: req.body.imageSubtitle

  })
  post.save(function(err, rec) {
    if(err) {
      return res.status(400).send("error while creting a post")
    }
    res.send(rec);
  })
});

router.route('/blogs/update/:id').post((req, res) => {
  Blog.findById(req.params.id, (err, blog) => {
    if(!blog)
    return next(new Error('Could not load document'));
    else {
      blog.title = req.body.title;
      blog.description = req.body.description;
      blog.author = req.body.author;
      blog.image = req.body.image;
      blog.imageTitle = req.body.imageTitle;
      blog.imageSubtitle = req.body.imageSubtitle;

      blog.save().then(blog => {
        res.json('Update done');
      }).catch(err => {
        res.status(400).send('Update failed');
      })
    }
  })
})

router.route('/blogs/delete/:id').get((req,res) => {
  Blog.findByIdAndRemove({_id:req.params.id}, (err, blog) => {
    if(err)
    res.json(err);
    else
    res.json("Removed successfully")
  })
})

app.use('/', router);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
})

app.listen(PORT, ()=> console.log('express is working'));

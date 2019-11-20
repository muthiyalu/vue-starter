var express = require('express');
var indexRouter = express.Router();

/* GET home page. */
indexRouter.get('/', function(req, res, next) {
  res.render('home', { title: 'Platform'});
});

indexRouter.get('/index', function(req, res, next) {
  res.render('index', { title: 'Platform', message:'Whats up !' });
});

indexRouter.get('/entry', function(req, res, next) {
  res.render('entry', { title: 'Platform', message:'Whats up !' });
});

module.exports = indexRouter;

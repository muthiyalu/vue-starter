var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', { title: 'Platform'});
});

router.get('/index', function(req, res, next) {
  res.render('index', { title: 'Platform', message:'Whats up !' });
});

router.get('/entry', function(req, res, next) {
  res.render('entry', { title: 'Platform', message:'Whats up !' });
});

module.exports = router;

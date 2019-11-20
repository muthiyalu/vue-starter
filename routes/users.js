var express = require('express');
var usersRouter= express.Router();

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

/* GET users listng. */
usersRouter.get('/login', function(req, res, next) {

  res.render('login', { title: 'Platform', message:'Login !' });

});


module.exports = usersRouter;

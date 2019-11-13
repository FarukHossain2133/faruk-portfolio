var express = require('express');
var router = express.Router();
const passport = require('passport');
const auth = require('../middleware/auth');


// Users signup route and middleware
router.get('/signup', auth, function(req, res, next) {
  res.render('signup', {
    msgError: req.flash('msgError'),
    passError: req.flash('passError')
  });
});

router.post('/signup', auth,  passport.authenticate('local.signup', {
  successRedirect: '/users/login',
  failureRedirect: '/users/signup',
  failureFlash: true
}));

// Users login route and middleware
router.get('/login', function(req, res, next) {
  res.render('login', {
    loginError: req.flash('loginError'),
    passwordError: req.flash('passwordError')
  });
 });

router.post('/login', passport.authenticate('local.login', {
  successRedirect: '/projects', 
  failureRedirect: '/users/login',
  failureFlash: true
}));

  // logout route
  router.get('/logout', auth, (req, res, next) => {
     req.logout();
    res.redirect('/');
  });

module.exports = router;

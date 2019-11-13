const passport = require('passport');
const localStrategy = require('passport-local').Strategy;

var User = require('../models/Users');

passport.serializeUser(function(user, done){
    done(null, user.id);
});

passport.deserializeUser(function(id, done){
    User.findById(id, function(err, user){
            done(err, user);
    });
});

// Passport local signup strategy middleware
passport.use('local.signup', new localStrategy({
     usernameField: 'email',
     passwordField: 'password', 
     passReqToCallback: true
    }, function(req, email, password, done){
        User.findOne({'email': email}, function(err, user){
            if(err){
                return done(err);
            }
            if(user){
               req.flash('msgError', 'User Already Exist')
                return done(null, false);
            } 
            if(req.body.password !== req.body.cPassword){
               req.flash('passError', 'Your password is not match')
                return done(null, false);
            }

            // if there is no user with that email
            // create the user
            var newUser = new User();
            // set the user's local credentials
            newUser.name = req.body.name;
            newUser.email = req.body.email;
            newUser.role = req.body.role;
            newUser.password = newUser.hashPassword(req.body.password);
            // save the user
            newUser.save(function(err) {
                if (err)
                    throw err;
                return done(null, newUser);
            });
        })
}));

// Passport local signin strategy middleware
passport.use('local.login', new localStrategy({
    usernameField: 'email',
    passwordField: 'password', 
    passReqToCallback: true
   }, function(req, email, password, done){
       User.findOne({'email': email}, function(err, user){
           if(err){
               return done(err);
           }
           if(!user){
               req.flash('loginError', 'Your Email Is Not Found')
               return done(null, false);
           }
           if(!user.validPassword(req.body.password)){
            req.flash('passwordError', 'Your Password Is Incorrect')
               return done(null, false);
           }
           return done(null, user);
        
       });
}));

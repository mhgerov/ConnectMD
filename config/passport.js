var bcrypt = require('bcrypt');
var passport = require('passport');
var models = require('../models');
var LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy({usernameField:'email'},function(username, password, done) {
	console.log('Looking for username: '+username)
	models.User.findOne({where:{email:username}}).then( (user) =>{
		if (!user) { console.log('User not found'); return done(null, false); }
		bcrypt.compare(password,user.password).then( (res) => {
			if(res) {
				console.log('passport authenticate success!');
				return done(null,user)
			} else {
				console.log('Wrong password!');
				return done(null, false);
			}
		});
	});
}))

passport.serializeUser(function(user, cb) {
  cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});

// Exporting our configured passport
module.exports = passport;

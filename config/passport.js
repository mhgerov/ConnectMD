var bcrypt = require('bcrypt');

module.exports = function(passport, user) {
	var User = user;
	var LocalStrategy = require('passport-local').Strategy;

	passport.use(new LocalStrategy(function(email, password, done) {
    	User.findOne({email:email}, function (err, user) {
      		if (err) { return done(err); }
      		if (!user) { return done(null, false); }
			bcrypt.compare(password,user.password).then( (res) => return done(null,res));
    	});
  	}))

	passport.serializeUser(function(user, done) {
  		done(null, user.id);
	});

	passport.deserializeUser(function(id, done) {
		User.findById(id, function (err, user) {
			done(err, user);
		});
	});
}

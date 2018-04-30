//Set port number
var PORT = process.env.PORT || 3000;

//Load Express
var express = require('express');
var app = express();

//Load Passport
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var bcrypt = require('bcrypt');

passport.serializeUser(function(user, done) {
	console.log('connect-md: serializing...');
  	done(null, user.id);
});

passport.deserializeUser(function(id, done) {
	console.log('connect-md: deserializing...');
	models.User.findById(id).then(function (user) {
		console.log('deserialize success '+user.email);
		done(null, user);
	});
});

passport.use(new LocalStrategy({usernameField:'email'},function(username, password, done) {
	console.log('Looking for username: '+username)
	models.User.findOne({where:{email:username}}).then( (user) =>{
		if (!user) { return done(null, false); }
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



//Load Handlebars
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//Set static files
app.use(express.static('public'));

//Load body-parser
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

//Load cookie-parser
app.use(require('cookie-parser')());

//Load Express Session
var session = require('express-session');
app.use(session({secret:'pickle rick',resave:true,saveUnintialized:true}));

app.use(passport.initialize());
app.use(passport.session());

//Load Sequelize
var models = require("./models");

models.sequelize.sync({force:false});



//Load Passport Strategies
//require('./config/passport.js')(passport,models.user);

//Routing
var htmlRouter = require('./controllers/html-routes.js');
var apiRouter = require('./controllers/api-routes.js');
app.use('/',htmlRouter);
app.use('/api',apiRouter);

//Start Server
app.listen(PORT, function() {
	console.log("App listening on PORT " + PORT);
});

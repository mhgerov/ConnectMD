//Set port number
var PORT = process.env.PORT || 3000;

//Load Express
var express = require('express');
var app = express();

//Load Passport
var passport = require('./config/passport');

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

//Routing
app.use('/',require('./controllers/html-routes.js'));
app.use('/api',require('./controllers/api-routes.js'));

//Start Server
app.listen(PORT, function() {
	console.log("App listening on PORT " + PORT);
});

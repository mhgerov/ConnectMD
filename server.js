//Set port number
var PORT = process.env.PORT || 3000;

//Load Express
var express = require('express');
var app = express();

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

//Load Express Session
var session = require('express-session');
app.use(session({secret:'pickle rick',resave:true,saveUnintialized:true}));

//Load Passport
var passport = require('passport');
app.use(passport.initialize());
app.use(passport.session());

//Routing
var htmlRouter = require('./controllers/html-routes.js');
var apiRouter = require('./controllers/api-routes.js');
app.use('/',htmlRouter);
app.use('/api',apiRouter);

//Load Sequelize
var db = require("./models");

db.sequelize.sync({force:false}).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});

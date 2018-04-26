//Set port number
var PORT = process.env.PORT || 3000;

//Load Express
var express = require('express');
var app = express();

//Load Handlebars
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({defaultLayout: 'main'}));

//Load body-parser
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

//Routing
var htmlRouter = require('./controllers/html-routes.js');
var apiRouter = require('./controllers/api-routes.js');

//Load Sequelize
var db = require("./models");

app.set('view engine', 'handlebars');


app.use(express.static('public'));

app.use('/',htmlRouter);
app.use('/api',apiRouter);


db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});

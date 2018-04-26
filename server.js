var express = require('express');
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');
var app = express();
var PORT = process.env.PORT || 3000;
var htmlRouter = require('./controllers/html-routes.js');
//var apiRouter = require('./controllers/api-router.js');

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.use(express.static('public'));

app.use('/',htmlRouter);
//app.use('/api',apiRouter);

app.listen(PORT, () => console.log('Listening on port '+PORT));

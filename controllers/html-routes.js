var express = require('express');
var router = express.Router();
var path = require('path');

router.get('/', function (req, res) {
	if (req.user) {
		res.render('home');
	} else {
		res.render('landing');
	}
});

router.get('/home', require('connect-ensure-login').ensureLoggedIn('/'), function (req, res) {
	console.log('User to be rendered: '+req.user.first_name);
	console.log('rendering home page...');
	res.render('home',{first_name:req.user.first_name});
});

router.get('/signup', function (req, res) {
	res.render('signup');
});

//Diagnostic page for Gmaps
router.get('/gmaps', function (req, res) {
	res.render('gmaps');
});

module.exports = router;


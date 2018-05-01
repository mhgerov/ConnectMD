var express = require('express');
var router = express.Router();
var path = require('path');
var bcrypt = require('bcrypt');
var models = require('../models');
var passport = require('passport');


router.get( "/test", function ( req, res ) {
	res.redirect( "/dummy" );
});

router.get('/sql', function (req, res) {
	models.User.findOne({where:{email:'asdf'}}).then((user) => {
		console.log(user)
		res.redirect('/dummy');
	})
});

//Sends login credentials to be verified (email, password)
router.post('/signin', passport.authenticate('local',{failureRedirect: '/'}) , function (req,res) {
	res.redirect('/home');
});

//Creates User
/*router.post('/user', function (req,res, next) {
	console.log('POST /api/user Creating new user...')
	var email = req.body.user;
	var pwd = req.body.password;
	models.User.create(req.body).then( (user) => {
		console.log('User built, redirecting...');
		res.send('/');
		next();
	});
});*/

module.exports = router;


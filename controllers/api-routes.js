var express = require('express');
var router = express.Router();
var path = require('path');
var bcrypt = require('bcrypt');
var models = require('../models');
var passport = require('passport');

//Sends login credentials to be verified (email, password)
router.post('/signin', 
		passport.authenticate('local',{successRedirect: '/home'})
		/*
		function(req,res) {
			console.log('-----LOGIN SUCCESS------');
			res.redirect('/home');
		}
		*/
);

//Creates User
router.put('/user', function (req,res) {
	console.log('PUT /api/user Creating new user...')
	var email = req.body.user;
	var pwd = req.body.password;
	models.User.create(req.body).then( (user) => {
		res.send('/home');	
	});
});

module.exports = router;


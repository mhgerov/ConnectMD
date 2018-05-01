var express = require('express');
var router = express.Router();
var path = require('path');
var bcrypt = require('bcrypt');
var models = require('../models');
var passport = require('passport');

//Sends login credentials to be verified (email, password)
router.post('/signin', passport.authenticate('local',{failureRedirect: '/'}) , function (req,res) {
	console.log('authenticate success, redirecting...');
	res.json('/home');
});

//Creates User
router.post('/user', function (req,res) {
	console.log('POST /api/user Creating new user...')
	models.User.create(req.body).then( (user) => {
		console.log('User built, redirecting...');
		res.json('/');
	});
});

//Return Lat/Long from address
router.get('/latlong', function (req,res) {
	console.log('Address: '+req.user.address);
});

module.exports = router;


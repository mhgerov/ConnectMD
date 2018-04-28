var express = require('express');
var router = express.Router();
var path = require('path');
var bcrypt = require('bcrypt');
var models = require('../models');
var passport = require('passport');

//Sends loging credentials to be verified (email, password)
router.post('/signin', function (req, res) {
});

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


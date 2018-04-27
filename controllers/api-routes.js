var express = require('express');
var router = express.Router();
var path = require('path');
var bcrypt = require('bcrypt');
const saltRounds = 10;

var db = require('../models/index.js');

//Sends loging credentials to be verified (email, password)
router.post('/login', function (req, res) {
	db.User.findOne({where: {email: req.body.email}}).then(user => {
		if (!user) return res.status(404).send('User not found!');
		bcrypt.compare(req.body.password, user.dataValues.password_hash, (err, result) => {
			if (err) return res.send(err);
			console.log('Comparing passwords...');
			console.log(result);
			res.send(result);	
		});
	});
});

//Creates User
router.put('/user', function (req, res) {
	//Checks if any JSON was sent at all
	if (!req.body) return res.sendStatus(400);
	//console.log('Incoming:');
	//console.log(req.body);
	bcrypt.hash(req.body.password, saltRounds, function (err, hash) {
		//remove plain password, then attach hash
		delete req.body.password;
		req.body.password_hash = hash;
		//console.log('Outgoing:');
		//console.log(req.body);
		db.User.create(req.body).then(user => {
			res.send(user);
		});
	});
});

module.exports = router;


var express = require('express');
var router = express.Router();
var path = require('path');
var bcrypt = require('bcrypt');

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
	req.body.password_hash = req.body.password;
	db.User.create(req.body).then(user => {
		res.send(user);
	});
});

module.exports = router;


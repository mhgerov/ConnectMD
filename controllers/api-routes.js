var express = require('express');
var router = express.Router();
var path = require('path');
var bcrypt = require('bcrypt');
const saltRounds = 10;

var db = require('../models/index.js');

router.get('/test', function (req, res) {
	res.sendStatus(200);
});

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


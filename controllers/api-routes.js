var express = require('express');
var router = express.Router();
var path = require('path');

router.get('/test', function (req, res) {
	res.sendStatus(200);
});

router.put('/user', function (req, res) {
	//Checks if any JSON was sent at all
	if (!req.body) return res.sendStatus(400);
	console.log('Incoming:');
	console.log(req.body);
	res.sendStatus(200);
});

module.exports = router;


var express = require('express');
var router = express.Router();
var path = require('path');

router.get('/', function (req, res) {
	res.send('<h1>It works!</h1>');
});

module.exports = router;


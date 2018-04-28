var express = require('express');
var router = express.Router();
var path = require('path');

router.get('/', function (req, res) {
	res.render('landing');
});

module.exports = router;


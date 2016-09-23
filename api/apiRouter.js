"use strict";
var express = require("express");
var router = express.Router();

router.get("/loanListing", function(req, res) {
	res.send(require("./models/loanListing"));
});
router.get('/loanDetails', function(req, res) {
	res.send(require("./models/loanListing"));
});

router.get('/authenticate', function(req, res) {
	res.send('Authenticating user...');
});


module.exports = router;

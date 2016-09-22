'use strict';
//require('angular-cookies');
require('angular-animate');
require('angular-sanitize');
//require('angular-touch');

var core = angular.module('core', [
	//'ngCookies',
	'ngAnimate',
	'ngSanitize',
	//'ngTouch',
	require('../components/sblocapp').name,
	//require('./components/loanDetails').name,
	//require('./components/loanListing').name,
	//require('./components/login').name
	// Core Services, filters etc.

	]);



module.exports = core;
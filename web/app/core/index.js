'use strict';
require('angular-cookies');
require('angular-animate');
require('angular-sanitize');
require('angular-touch');

var core = angular.module('core', [
	'ngCookies',
	'ngAnimate',
	'ngSanitize',
	'ngTouch',
	require('./sblocapp').name,
	require('./loanDetail').name,
	require('./loanListing').name,
	require('./login').name])
	// Core Services, filters etc.

	]);



module.exports = core;
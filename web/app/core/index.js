'use strict';
require('angular-cookies');
require('angular-animate');
require('angular-sanitize');
//require('angular-touch');

angular.module('core', [
	'ngCookies',
	'ngAnimate',
	'ngSanitize',
	'genTemplates',
	//'ngTouch',
	require('../components/sblocapp').name,
	require('../components/loanDetails').name,
	require('../components/loanListing').name,
	require('../components/login').name
	// Core Services, filters etc.
	
	]);



module.exports = angular.module('core');
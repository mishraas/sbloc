'use strict';
require('angular-cookies');
require('angular-animate');
require('angular-sanitize');
require('ngComponentRouter');
require('angular-ui-bootstrap');
require('angular-touch');

angular.module('core', [
	'ngCookies',
	'ngAnimate',
	'ngSanitize',
	'genTemplates',
	'ngComponentRouter',
	'ui.bootstrap',
	'ngTouch',
	require('./services').name,
	require('../components/sblocapp').name,
	require('../components/loanDetails').name,
	require('../components/loanListing').name,
	require('../components/login').name
	
	]);


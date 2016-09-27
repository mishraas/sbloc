'use strict';
require('angular-cookies');
require('angular-animate');
require('angular-sanitize');
require('ngComponentRouter');
require('angular-touch');
require('ui-select');

angular.module('core', [
	'ngCookies',
	'ngAnimate',
	'ngSanitize',
	'genTemplates',
	'ngComponentRouter',
	'ui.bootstrap',
	'ui.select',
	require('../components/sblocapp').name,
	require('../components/loanDetails').name,
	require('../components/loanListing').name,
	require('../components/login').name

	
	]);


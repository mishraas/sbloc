'use strict';
require('angular-cookies');
require('angular-animate');
require('angular-sanitize');
require('angular-route');
//require('angular-touch');

var core = angular.module('core', [
	'ngCookies',
	'ngAnimate',
	'ngSanitize',
	'genTemplates',
	'ngRoute',
	'ui.bootstrap',
	//'ngTouch',
	require('../components/sblocapp').name,
	require('../components/loanDetails').name,
	require('../components/loanListing').name,
	require('../components/login').name
	// Core Services, filters etc.
	
	]);


core.config(['$routeProvider', function($routeProvider) {
            $routeProvider
                .when('/', { template: '<loan-details-comp></loan-details-comp>' })
                .when('/login', { template: '<login-comp></login-comp>' })
                .when('/loandetails', { template: '<loan-details-comp></loan-details-comp>' })
                .when('/loan', { template: '<loan-details-comp></loan-details-comp>' })
                .when('/loanlisting', { template: '<loan-listing-comp></loan-listing-comp>' })
                .otherwise({ redirectTo: '/loan' });
        }]);


module.exports = angular.module('core');
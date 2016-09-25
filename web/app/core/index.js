'use strict';
require('angular-cookies');
require('angular-animate');
require('angular-sanitize');
require('ngComponentRouter');
require('angular-ui-bootstrap');
require('angular-touch');

var core = angular.module('core', [
	'ngCookies',
	'ngAnimate',
	'ngSanitize',
	'genTemplates',
	'ngComponentRouter',
	'ui.bootstrap',
	'ngTouch',
	require('../components/sblocapp').name,
	require('../components/loanDetails').name,
	require('../components/loanListing').name,
	require('../components/login').name
	// Core Services, filters etc.
	
	]);

core.value('$routerRootComponent', 'coreComp');
core.component('coreComp', {
	template: '<sbloc-comp></sbloc-comp>',
	$routeConfig: [
		{ path: '/', component: 'loginComp', name: 'LoanDetails' },
		{ path: '/loanlisting', component: 'loanListingComp', name: 'LoanListing' },
		{ path: '/login', component: 'loginComp', name: 'Login' },
		{ path: '/loan', component: 'loanDetailsComp', name: 'LoanDetails' },
		{ path: '/**', component: 'loanDetailsComp', name: 'NotFound' }
	]
});




/*core.config(['$routeProvider', function($routeProvider) {
            $routeProvider
                .when('/', { template: '<loan-details-comp></loan-details-comp>' })
                .when('/login', { template: '<login-comp></login-comp>' })
                .when('/loandetails', { template: '<loan-details-comp></loan-details-comp>' })
                .when('/loan', { template: '<loan-details-comp></loan-details-comp>' })
                .when('/loanlisting', { template: '<loan-listing-comp></loan-listing-comp>' })
                .otherwise({ redirectTo: '/loan' });
        }]);
*/

module.exports = angular.module('core');
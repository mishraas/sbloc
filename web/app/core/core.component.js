'use strict';

angular.module('core').component('coreComp', {
	template: '<sbloc-app></sbloc-app>',
	$routeConfig: [
		{ path: '/', component: 'loginComp', name: 'LoanDetails' },
		{ path: '/loanlisting', component: 'loanListingComp', name: 'LoanListing' },
		{ path: '/login', component: 'loginComp', name: 'Login' },
		{ path: '/loan', component: 'loanDetailsComp', name: 'LoanDetails' },
		{ path: '/**', component: 'loginComp', name: 'NotFound' }
	]
}).value('$routerRootComponent', 'coreComp');


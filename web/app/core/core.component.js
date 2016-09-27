'use strict';

angular.module('core').component('coreComp', {
	template: '<sbloc-comp></sbloc-comp>',
	$routeConfig: [
		{ path: '/', component: 'loginComp', name: 'Login' },
		{ path: '/login', component: 'loginComp', name: 'Login' },
		{ path: '/logout', component: 'loginComp', name: 'Logout' },
		{ path: '/LoanDetails', component: 'loanDetailsComp', name: 'LoanDetails' },
		{ path: '/loanlisting', component: 'loanListingComp', name: 'LoanListing' }
		
	]

}).value('$routerRootComponent', 'coreComp');


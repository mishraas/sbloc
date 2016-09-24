"use strict";

angular.module('sblocapp').component('sblocComp', {

	bindings:{},
	templateUrl: 'sblocapp/sblocapp.html',
	controller:function(){},
	$routeConfig: [
		{ path: '/', component: 'loginComp', name: 'Login' },
		{ path: '/login', component: 'loginComp', name: 'Login' },
		{ path: '/loandetails', component: 'loanDetailsComp', name: 'Loan-Details' },
		{ path: '/loanlisting', component: 'loanListingComp', name: 'Loan-Listing' },
		{ path: '/**', component: 'loginComp', name: 'Login' }
	]

});

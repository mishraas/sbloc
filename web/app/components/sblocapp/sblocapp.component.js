"use strict";

angular.module('sblocapp').component('sblocComp', {

	bindings:{},
	templateUrl: 'sblocapp/sblocapp.html',
	controller:function(){},
	$routeConfig: [
      { path: '/', component: 'sblocComp', name: 'home', useAsDefault: true },
      { path: '/**', redirectTo: ['home']}
    ]

});
"use strict";

angular.module('sblocapp').component('sblocComp', {

	bindings:{},
	templateUrl: 'app/components/sblocapp/sblocapp.html',
	controller:function(){},
	$routeConfig: [
      { path: '/', component: 'sblocComp', name: 'home', useAsDefault: true },
      { path: '/**', redirectTo: ['home'] }
    ]

});
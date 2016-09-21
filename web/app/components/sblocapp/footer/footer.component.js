"use strict";

var angular = require('angular');
var app = angular.module('sbloc');

var footer = app.component('footer', {

	bindings : {},
	templateUrl : '',
	controller : function(){
		this.message = "©Copyright 2016 / All Rights Reserved - Sapient";
	}

});






module.exports = footer;
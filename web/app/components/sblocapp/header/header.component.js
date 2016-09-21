"use strict";

var angular = require('angular');
var app = angular.module('sbloc');

var header = app.component('header', {
	bindings : {},
	templateUrl : '',
	controller : HeaderController

});

function HeaderController($scope, $element, $attrs) {
  var ctrl = this;
  
  ctrl.messages = {
  	"appHeading": "SBLOC Block Chain POC",
  	"login" : "Login",
  	"logout" : "Logout",
  	"newLoan" : "New Loan",
  	"loanListing" : "Loan Listing"
  };

	//Set flags based upon the user authentication
	//Set username property after log-in

};




module.exports = header;
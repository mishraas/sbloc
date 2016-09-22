"use strict";

function HeaderController($scope, $element, $attrs) {
  var ctrl = this;
  
  /*ctrl.messages = {
    "appHeading": "SBLOC Block Chain POC",
    "login" : "Login",
    "logout" : "Logout",
    "newLoan" : "New Loan",
    "loanListing" : "Loan Listing"
  };
*/
  //Set flags based upon the user authentication
  //Set username property after log-in

};

var header = angular.module('sblocapp').component('headerComp', {
	bindings : {},
	templateUrl : 'app/components/sblocapp/header/header.html',
	controller : HeaderController

});



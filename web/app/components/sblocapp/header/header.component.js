"use strict";

function HeaderController() {
  //var ctrl = this;
  
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

}

angular.module('sblocapp').component('headerComp', {
	bindings : {},
	templateUrl : 'sblocapp/header/header.html',
	controller : HeaderController

});



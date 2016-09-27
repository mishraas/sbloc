"use strict";

angular.module('login', []).component('loginComp', {

	bindings:{
	},
	templateUrl: 'login/login.html',
	controller:function(AuthService){
		this.user={email:"",password:""};

		this.login=function(){

			AuthService.login(this.user);
		};
	}



});
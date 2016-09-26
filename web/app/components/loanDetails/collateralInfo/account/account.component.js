"use strict";

function AccountController($scope){
	//mockData
	$scope.initAccounts = [{id:1, name:'Account 1', securities: []},{id:2, name:'Account 2', securities: []},
										{id:3, name:'Account 3', securities: []},
										{id:4, name:'Account 4', securities: []},
										{id:5, name:'Account 5', securities: []}
										];
	$scope.accounts =  [];
    
	$scope.addAccount = function() {
		if($scope.account && $scope.accounts.indexOf($scope.account)==-1){
			$scope.accounts.push($scope.account);
			$scope.account = undefined;
		}
    };
    $scope.deleteAccount = function() {
		if($scope.accounts.length>0) {
			$scope.accounts.splice(this.$index, 1);
		}
    };
  
    $scope.modelOptions = {
      debounce: {
        default: 500,
        blur: 250
      },
      getterSetter: true
    };
    
}


angular.module('loanDetails').component('accountComp', {

	bindings:{},
	templateUrl: 'loanDetails/collateralInfo/account/account.html',
	controller: AccountController

});
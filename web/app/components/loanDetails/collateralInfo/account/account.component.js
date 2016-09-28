"use strict";

function collateralAccountController() {
    var $ctrl = this;
    $ctrl.noAccountSelectedMessage = false;
    $ctrl.init = function() {
        $ctrl.showAccountSection = $ctrl.collateralAccountList.length ? true : false;
 
    };

    $ctrl.enableSecuritySection = function() {
        $ctrl.selectedAccountList = getSelectedCollateralAccounts($ctrl.collateralAccountList);
        if($ctrl.selectedAccountList.length){
              $ctrl.securitySectionEnable();
        }else{
            $ctrl.noAccountSelectedMessage = true;
        }
        
    };

    function getSelectedCollateralAccounts(accountList){
             var selectedAccounts = accountList.filter(function(account){
                return account.selected === true;
            });
            return selectedAccounts;
    }

    $ctrl.init();
}

collateralAccountController.$inject = [];

var collateralAccountConfig = {

    bindings: {
        collateralAccountList: '=',
        selectedAccountList : '=',
        securitySectionEnable : '&'
    },
    templateUrl: 'loanDetails/collateralInfo/account/account.html',
    controller: collateralAccountController

};

angular.module('loanDetails').component('accountComp', collateralAccountConfig);

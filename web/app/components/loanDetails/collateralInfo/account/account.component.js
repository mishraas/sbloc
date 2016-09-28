"use strict";

function collateralAccountController(loanDetailService) {
    var $ctrl = this;
    var selectedAccountList = [];
    $ctrl.noAccountSelectedMessage = false;
    $ctrl.init = function() {
        $ctrl.showAccountSection = $ctrl.collateralAccountList.length ? true : false;
 
    };

    $ctrl.enableSecuritySection = function() {
        selectedAccountList = getSelectedCollateralAccounts($ctrl.collateralAccountList);
        if(selectedAccountList.length){
            loanDetailService.selectedAccountList = selectedAccountList;
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

collateralAccountController.$inject = ['loanDetailService'];

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

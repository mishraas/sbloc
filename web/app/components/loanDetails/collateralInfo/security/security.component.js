"use strict";

var securityDetailsController = function(loanDetailService) {
    var $ctrl = this;
    $ctrl.init = function() {
        $ctrl.showLoanFormSection = false;
        $ctrl.collateralAccountDetails = loanDetailService.getAccountSecurityDetails();
    };

    $ctrl.init();
};

securityDetailsController.$inject = ['loanDetailService'];

var securityDetailsConfig = {

    bindings: {
        collateralAccountList: '<'
    },
    templateUrl: 'loanDetails/collateralInfo/security/security.html',
    controller: securityDetailsController

};

angular.module('loanDetails').component('securityComp', securityDetailsConfig);

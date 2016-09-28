"use strict";

var securityDetailsController = function(loanDetailService) {
    var $ctrl = this;
    $ctrl.collateralValue = 0;
    $ctrl.init = function() {
        $ctrl.showLoanFormSection = false;
        $ctrl.accountDetails = $ctrl.securityDetails;
        $ctrl.loanAmount = '$' + loanDetailService.loanAmount;
        calculateCollateralAmount($ctrl.accountDetails.securityDetails.data);
    };

    function calculateCollateralAmount(securityDetails) {
        securityDetails.forEach(function(security) {
            $ctrl.collateralValue += Number.parseInt(security[security.length - 1]);
        });
    }

    $ctrl.init();
};

securityDetailsController.$inject = ['loanDetailService'];

var securityDetailsConfig = {

    bindings: {
        securityDetails: '='
    },
    templateUrl: 'loanDetails/collateralInfo/security/security.html',
    controller: securityDetailsController

};

angular.module('loanDetails').component('securityComp', securityDetailsConfig);

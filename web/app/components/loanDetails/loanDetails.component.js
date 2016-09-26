"use strict";

var loanDetailsController = function(loanDetailService) {
    var $ctrl = this;
    $ctrl.closeOtherAccordian = true;
    $ctrl.openLoanInfoSection = true;
    $ctrl.openCollateralInfoSection = false;

    $ctrl.init = function() {
        loanDetailService.getLoanReasons().then(function(reasonData) {
            $ctrl.loanReasons = reasonData['loan-reason'];
        });

    };

    $ctrl.expandCollateralInfo = function() {
        $ctrl.openCollateralInfoSection = !$ctrl.openCollateralInfoSection;
    };

    $ctrl.init();
};

loanDetailsController.$inject = ['loanDetailService'];

var loanDetailsConfig = {
    bindings: {},
    templateUrl: 'loanDetails/loanDetails.html',
    controller: loanDetailsController
};

module.exports = angular.module('loanDetails').component('loanDetailsComp', loanDetailsConfig);

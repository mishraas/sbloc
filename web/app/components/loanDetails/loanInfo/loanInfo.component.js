"use strict";

var loanInfoController = function(loanDetailService) {

    var $ctrl = this;
    $ctrl.init = function() {
        $ctrl.showRateSection = false;
    };

    $ctrl.enableRateSection = function() {
        loanDetailService.getCurrentRate().then(function(rateInfo) {
            $ctrl.currentRate = rateInfo;
            $ctrl.showRateSection = !$ctrl.showRateSection;
        });
    };

    $ctrl.onLoanInfoSave = function(form) {
        if (form.$valid) {
            saveLoanInfoData();
            loanDetailService.loanAmount = $ctrl.user.loanAmount;
            loanDetailService.getCollateralAccountList($ctrl.openCollateralAccordian);
        }

    };

    function saveLoanInfoData() {

        var loanInfoData = {
            firstName: $ctrl.user.firstName,
            middeleInitial: $ctrl.user.middleName,
            lastName: $ctrl.user.lastName,
            emailId: $ctrl.user.email,
            mobileNumber: $ctrl.user.mobilenumber,
            loanAmount: $ctrl.user.loanAmount,
            useofLoan: $ctrl.user.selectedReason.Reason
        };

        console.log(loanInfoData);
         //TODO -- code for posting this data to backend

    }


    $ctrl.init();
};

loanInfoController.$inject = ['loanDetailService'];

var loanInfoConfig = {
    bindings: {
        loanReasons: '=',
        openCollateralAccordian: '&'
    },
    templateUrl: 'loanDetails/loanInfo/loanInfo.html',
    controller: loanInfoController
};

angular.module('loanInfo').component('loanInfoComp', loanInfoConfig);

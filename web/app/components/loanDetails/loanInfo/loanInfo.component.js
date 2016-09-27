"use strict";

var loanInfoController = function(loanDetailService) {

    var $ctrl = this;
    $ctrl.init = function() {
        $ctrl.showRateSection = false;
    };

    $ctrl.enableRateSection = function(){
        loanDetailService.getCurrentRate().then(function(rateInfo){
            $ctrl.currentRate = rateInfo;
            $ctrl.showRateSection = !$ctrl.showRateSection;
        }
    );
    };

     $ctrl.onLoanInfoSave = function(form){
        if(form.$valid){
            loanDetailService.loanAmount = $ctrl.loanAmount;
            loanDetailService.getCollateralAccountList($ctrl.openCollateralAccordian);
        }
        
    };

    $ctrl.init();
};

loanInfoController.$inject = ['loanDetailService'];

var loanInfoConfig = {
    bindings: {
        loanReasons: '=',
        openCollateralAccordian : '&'
    },
    templateUrl: 'loanDetails/loanInfo/loanInfo.html',
    controller: loanInfoController
};

angular.module('loanInfo').component('loanInfoComp', loanInfoConfig);

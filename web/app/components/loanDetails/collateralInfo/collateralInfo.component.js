"use strict";

var collateralInfoController = function(loanDetailService) {
    var $ctrl = this;
    $ctrl.init = function() {
        $ctrl.collateralAccountList = loanDetailService.collateralAccountList;
        $ctrl.selectedAccountList = [];
        $ctrl.enableSecuritySection = false;
    };

    $ctrl.showSecuritySection = function(){
        console.log($ctrl.selectedAccountList);
        $ctrl.enableSecuritySection = true;
    };
    
    $ctrl.init();

};

collateralInfoController.$inject = ['loanDetailService'];

var collateralInfoConfig = {
    bindings: {
        loanReasons: '='
    },
    templateUrl: 'loanDetails/collateralInfo/collateralInfo.html',
    controller: collateralInfoController
};

angular.module('collateralInfo').component('collateralInfoComp', collateralInfoConfig);

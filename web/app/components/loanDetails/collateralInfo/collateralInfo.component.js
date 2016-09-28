"use strict";

var collateralInfoController = function(loanDetailService) {
    var $ctrl = this;
    $ctrl.init = function() {
        $ctrl.collateralAccountList = loanDetailService.collateralAccountList;
        $ctrl.securityDetails = {};
        $ctrl.enableSecuritySection = false;
    };

    $ctrl.showSecuritySection = function(){
        fetchSecurityList(loanDetailService.selectedAccountList);
    };

    function fetchSecurityList(securityList){
        loanDetailService.fetchSecurityList(securityList).then(function(securityDetails){
                $ctrl.securityDetails = securityDetails;
                $ctrl.enableSecuritySection = true;
        });
    }
    
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

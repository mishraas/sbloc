"use strict";

function collateralAccountController() {
    var $ctrl = this;
    $ctrl.init = function() {
        $ctrl.showAccountSection = $ctrl.collateralAccountList.length ? true : false;
 
    };

    $ctrl.enableSecuritySection = function() {
        $ctrl.securitySectionEnable();
    };

    $ctrl.init();
}

collateralAccountController.$inject = [];

var collateralAccountConfig = {

    bindings: {
        collateralAccountList: '<',
        securitySectionEnable : '&'
    },
    templateUrl: 'loanDetails/collateralInfo/account/account.html',
    controller: collateralAccountController

};

angular.module('loanDetails').component('accountComp', collateralAccountConfig);

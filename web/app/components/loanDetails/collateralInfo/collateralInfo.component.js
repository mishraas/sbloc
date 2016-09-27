"use strict";

var collateralInfoController = function(loanDetailService) {
    var $ctrl = this;
    $ctrl.init = function() {
        $ctrl.collateralAccountList = loanDetailService.collateralAccountList;
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

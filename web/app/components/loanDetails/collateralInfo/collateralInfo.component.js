"use strict";

var collateralInfoController = function() {

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

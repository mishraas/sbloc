"use strict";

var loanInfoController = function(loanDetailService) {

    var $ctrl = this;
    $ctrl.init = function() {
        $ctrl.showRateSection = false;
    };

    $ctrl.enableRateSection = function(){
        loanDetailService.getCurrentRate().then(function(rateInfo){
            $ctrl.currentRate = rateInfo.data;
            $ctrl.showRateSection = !$ctrl.showRateSection;
        }
    );
    };

    $ctrl.init();
};

loanInfoController.$inject = ['loanDetailService'];

var loanInfoConfig = {
    bindings: {
        loanReasons: '='
    },
    templateUrl: 'loanDetails/loanInfo/loanInfo.html',
    controller: loanInfoController
};

angular.module('loanInfo').component('loanInfoComp', loanInfoConfig);

"use strict";

var loanDetailsController = function(loanDetailService) {
    var $ctrl = this;

    $ctrl.init = function() {
        loanDetailService.getLoanReasons().then(function(reasonData) {
            $ctrl.loanReasons = reasonData.data['loan-reason'];
        });

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

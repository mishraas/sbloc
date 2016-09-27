"use strict";

var HeaderController = function() {
    var $ctrl = this;
    $ctrl.enableList = false;

    $ctrl.init = function() {

    };

    $ctrl.onButtonClicked = function() {
        $ctrl.enableList = !$ctrl.enableList;
    };
    $ctrl.init();

};

var headerConfig = {
    bindings: {},
    templateUrl: 'sblocapp/header/header.html',
    controller: HeaderController
};

angular.module('sblocapp').component('headerComp', headerConfig);

"use strict";

var HeaderController = function() {
    var $ctrl = this;


    $ctrl.init = function() {

    };

    $ctrl.init();

};

var headerConfig = {
    bindings: {},
    templateUrl: 'sblocapp/header/header.html',
    controller: HeaderController
};

angular.module('sblocapp').component('headerComp', headerConfig);

"use strict";

angular.module('core').service('loanDetailService', function(apiCallService) {
    var self = this;
    self.loanAmount = '';
    var baseApiUrl = '/api';
    var urls = {
        useOfloan: baseApiUrl + '/useofloans',
        currentRate: baseApiUrl + '/currentrate',
        collateralAccountList: baseApiUrl + '/collateralaccountlist',
        collateralaccountsecuritydetails: baseApiUrl + '/collateralaccountsecuritydetails'
    };

    self.getLoanReasons = function() {
        return apiCallService.getApiData(urls.useOfloan);
    };

    self.getCurrentRate = function() {
        return apiCallService.getApiData(urls.currentRate);
    };

    self.getCollateralAccountList = function(openCollateralAccordian) {
        apiCallService.getApiData(urls.collateralAccountList).then(function(collateralAccountList) {
            self.collateralAccountList = collateralAccountList.collateralAccount;
            openCollateralAccordian();
        });
    };

    self.getAccountSecurityDetails = function() {
        return apiCallService.getApiData(urls.collateralaccountsecuritydetails);
    };

    return self;
});

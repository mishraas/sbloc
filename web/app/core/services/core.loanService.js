"use strict";

angular.module('core').service('loanDetailService', function(apiCallService) {
    var self = this;
    var baseApiUrl = '/api';
    var urls = {
        useOfloan: baseApiUrl + '/useofloans',
        currentRate : baseApiUrl + '/currentrate'

    };

    self.getLoanReasons = function() {
        return apiCallService.getApiData(urls.useOfloan);
    };

    self.getCurrentRate = function() {
         return apiCallService.getApiData(urls.currentRate);
    };

    return self;
});

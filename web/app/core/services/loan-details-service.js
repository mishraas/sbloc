"use strict";

angular.module('core').service('loanDetailService', function($http, $q) {
    var self = this;
    var baseApiUrl = '/api';
    var urls = {
        useOfloan: baseApiUrl + '/useofloans',
        currentRate : baseApiUrl + '/currentrate'

    };

    self.getLoanReasons = function() {
        var defer = $q.defer();
        $http.get(urls.useOfloan).then(function(data) {
            defer.resolve(data);
        });
        return defer.promise;
    };

    self.getCurrentRate = function() {
        var defer = $q.defer();
        $http.get(urls.currentRate).then(function(data) {
            defer.resolve(data);
        });
        return defer.promise;
    };

    return self;
});

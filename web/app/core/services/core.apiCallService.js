"use strict";

angular.module('core').service('apiCallService', function($http,$q) {
    var self = this;

    self.getApiData = function(url) {
        var defer = $q.defer();
        $http.get(url).then(function(response) {
            defer.resolve(response.data);
        });
        return defer.promise;
    };

    return self;
});

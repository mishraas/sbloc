angular.module('core').factory('AuthhttpIntercepter', ['$location', '$cookies',function($location, $cookies) {

    return {
        request: function(config) {
            var isLoogedIn = $cookies.get('user-token');
            if (isLoogedIn) {
                console.log("hurray! user is logged in");
            } else {
                $location.path('/login');
            }
            return config;
        },

        requestError: function(config) {

            return config;
        },

        response: function(res) {

            return res;
        },

        responseError: function(res) {
            return res;
        }
    };
}]);


angular.module('core').config(['$httpProvider', function($httpProvider) {
    $httpProvider.interceptors.push('AuthhttpIntercepter');
}]);
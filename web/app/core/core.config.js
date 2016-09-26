angular.module('core').config(['$httpProvider', function($httpProvider) {
    $httpProvider.interceptors.push('AuthhttpIntercepter');
}]);
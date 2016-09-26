angular.module('core').config(['$httpProvider','$locationProvider', function($httpProvider,$locationProvider) {
	$locationProvider.html5Mode(true);
    $httpProvider.interceptors.push('AuthhttpIntercepter');
}]);